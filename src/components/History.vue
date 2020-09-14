<template>
  <div class="history">
    <h3 class="history__title">Recent company searches</h3>
    <v-expansion-panels>
      <v-expansion-panel v-for="item in historyData" :key="item.historyId">
        <v-expansion-panel-header
          >{{ item.company.companyName }}
          <span class="history__logged-at">
            Searched at
            {{ moment(item.loggedAt).format("YYYY-MM-DD h:mm:ss") }}</span
          ></v-expansion-panel-header
        >
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
  name: "History",
  data() {
    return {
      historyData: null
    };
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
};
</script>

<style scoped>
.history {
  margin: 40px 30px 0px 25px;
  width: 750px;
}

.history__title {
  margin: 0px 0px 5px 0px;
}

.history__logged-at {
  text-align: right;
  margin: 3px 10px 0px 0px;
  font-size: 14px;
}
</style>
