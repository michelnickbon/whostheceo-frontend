<template>
  <div>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="states"
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
      }
    }
}

</script>

<style scoped>

</style>
