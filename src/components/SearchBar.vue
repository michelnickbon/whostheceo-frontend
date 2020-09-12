<template>
  <div>
  <v-autocomplete
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
        items: [],
        search: null,
        select: null,
        states: [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
        ],
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
    }
}

</script>

<style scoped>

</style>
