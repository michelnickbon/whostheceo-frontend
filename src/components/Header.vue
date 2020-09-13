<template>
  <v-container class="header-container">
    <h1 class="text-center"> Who's the CEO? </h1>
    <p class="text-center"> Look up the CEO of any public company! </p>
  </v-container>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  computed: {
    totalTvCount () {
      return this.$store.state.totalTvCount
    }
  },
  mounted() {
    //this.$store.commit('storeCompany', 1203930);
  }
}
</script>

<style scoped>
  .header-container {
    margin-top: 40px;
  }
</style>
