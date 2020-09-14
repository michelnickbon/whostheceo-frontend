<template>
  <div class="history">
    <h3> Recent searches </h3>
    <v-expansion-panels>
      <v-expansion-panel v-for="item in historyData" :key="item.historyId">
        <v-expansion-panel-header>{{ item.company.companyName }} - Logged at {{ new Date(item.loggedAt) }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ item.company.companyDescription }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import * as Base from "../assets/Base";
export default {
  name: 'History',
  data () {
      return {
        historyData: null,
      }
  },
  async mounted() {
    try {
      const result = await Base.GetData("/history");
      this.historyData = result;
      console.log(this.historyData);
    } catch (error) {
      console.log("Error while fetching data", error);
    }
  }

}

</script>

<style scoped>
.history {
  margin: 40px 30px 0px 25px;
  width: 750px;
}
</style>
