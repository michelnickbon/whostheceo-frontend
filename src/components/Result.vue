<template>
  <div v-if="companyWasFetched == true && companyResult">
    <v-card class="mx-auto result-card elevation-{3}" max-width="765">
      <!-- CEO info -->
      <v-list-item three-line>
        <v-list-item-content class="result">
          <div class="overline mb-1">
            CEO of {{ companyResult.companyName }} (
            {{ moment(companyResult.ceo.activeFrom).format("YYYY") }} - )
          </div>
          <v-list-item-title class="headline mb-1">
            {{ companyResult.ceo.fullName }}
          </v-list-item-title>
          <p class="ceo-bio">{{ companyResult.ceo.shortBio }}</p>
          <p class="company-bio">{{ companyResult.companyDescription }}</p>
        </v-list-item-content>
        <v-avatar :tile="true" size="100">
          <img :src="companyResult.ceo.imageRef" size="100" />
        </v-avatar>
      </v-list-item>

      <!-- Website section -->
      <v-card-actions>
        <v-btn
          small
          class="ma-2"
          :href="companyResult.companyWebsite"
          tile
          color="indigo"
          dark
          >Company Website</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Result",
  data() {
    return {};
  },
  computed: mapState(["companyWasFetched", "companyResult"])
};
</script>

<style scoped>
.result-card {
  margin-top: 20px;
}

.ceo-bio {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 18px;
}

.company-bio {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  margin: 10px 0px 0px 0px;
  line-height: 18px;
}

.result {
  padding: 0px 60px 0px 0px;
}
</style>
