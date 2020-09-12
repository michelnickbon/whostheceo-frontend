<template>
  <div>
    <v-autocomplete
      @change="loadCompany"
      v-model="select"
      :loading="loading"
      :items="availableCompanies"
      :item-value="'id'"
      :item-text="'name'"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="Search for a publicly listed company"
      solo-inverted
    ></v-autocomplete>
  </div>
</template>

<script>
import * as Base from "../assets/Base";

export default {
  name: 'SearchBar',
  data () {
      return {
        loading: false,
        search: null,
        select: null,
        availableCompanies: []
      }
    },
    async mounted() {
      try {
        const result = await Base.GetData("/companies/GetCompanyList");
        result.forEach(company => {
          const companyItem = {};
          companyItem["id"] = company.companyId;
          companyItem["name"] = company.companyName;
          this.availableCompanies.push(companyItem);
        });
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    },
    methods: {
      async loadCompany(companyId) {
        if (companyId) {
          try {
            const result = await Base.GetData("/companies/" + companyId);
            console.log(result);
          } catch (error) {
            console.log("Error while fetching data", error);
          }
        }
      }
    }
}

</script>

<style scoped>

</style>
