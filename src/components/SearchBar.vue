<template>
  <div>
    <v-autocomplete
      v-model="select"
      :items="availableCompanies"
      :item-value="'id'"
      :item-text="'name'"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="Search for a publicly listed company"
      solo-inverted
      @change="loadCompany"
    ></v-autocomplete>
  </div>
</template>

<script>
import * as Base from "../services/Base";
import moment from "moment";

export default {
  name: "SearchBar",
  data() {
    return {
      select: null,
      availableCompanies: [],
      postBody: {}
    };
  },

  async mounted() {
    try {
      const result = await Base.GetData("/companies/list");
      result.forEach(company => {
        const companyItem = {};
        companyItem.id = company.companyId;
        companyItem.name = company.companyName;
        this.availableCompanies.push(companyItem);
      });
    } catch (error) {
      console.log("Error while fetching data", error);
    }
  },

  methods: {
    // Loads data for the selected company, stored in Vuex
    async loadCompany(companyId) {
      if (companyId) {
        try {
          const result = await Base.GetData("/companies/" + companyId);
          await this.$store.commit("storeResultSuccess", true);
          await this.$store.commit("storeCompany", result);
        } catch (error) {
          console.log("Error while fetching data", error);
        }
      }
      await this.storeCompany();
    },

    // Load data from store, save it to the database
    async storeCompany() {
      const company = this.$store.state.companyResult;
      this.postBody["CompanyId"] = company.companyId;
      this.postBody["LoggedAt"] = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
      await Base.PostData("/history", this.postBody);
      this.postBody = {};
    },

    // Store history to database
    async storeHistory() {
      try {
        const result = await Base.PostData("/history");
        await this.$store.commit("clearCompany");
        console.log(result);
      } catch (error) {
        console.log("Error while storing data", error);
      }
    }
  }
};
</script>

<style scoped></style>
