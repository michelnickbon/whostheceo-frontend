<template>
  <v-app>
    <v-main class="container">
      <Header/>
      <SearchBar/>
      <Result/>
      <History/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import History from './components/History';

export default {
  name: 'App',
  components: {
    Header,
    SearchBar,
    Result,
    History
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .container {
    width: 800px;
  }
</style>