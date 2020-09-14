<template>
  <div v-if="companyWasFetched == true">
    <v-card class="mx-auto result-card elevation-{3}" max-width="750" >
      <!-- CEO info -->
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">CEO of {{companyResult.companyName}}</div>
          <v-list-item-title class="headline mb-1"> {{companyResult.ceo.fullName}} </v-list-item-title>
          <v-list-item-subtitle> {{companyResult.ceo.shortBio}} </v-list-item-subtitle>
          <v-list-item-subtitle> Active from {{ moment(companyResult.ceo.activeFrom).format("YYYY-MM-DD") }} </v-list-item-subtitle>
        </v-list-item-content>
        <v-avatar size="100">
          <img :src="companyResult.ceo.imageRef" size="80">
        </v-avatar>
      </v-list-item>

      <!-- Company info -->
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title> About {{companyResult.companyName}}...</v-list-item-title>
          <v-list-item-subtitle>  {{companyResult.companyDescription}} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- Website section -->
      <v-card-actions>
        <v-btn small class="ma-2" :href="companyResult.companyWebsite" tile color="indigo" dark>Company Website</v-btn>
      </v-card-actions>
    </v-card>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Result',
  computed: mapState(['companyWasFetched', 'companyResult']),
  data () {
    return {}
  }
}
</script>

<style scoped>
  .result-card {
    margin-top: 20px;
  }
</style>
