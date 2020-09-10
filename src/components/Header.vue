<template>
  <v-container class="header-container">
  <h1 class="text-center"> Who's the CEO? </h1>
  </v-container>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
}
</script>

<style scoped>
  .header-container {
    margin-top: 40px;
  }
</style>
