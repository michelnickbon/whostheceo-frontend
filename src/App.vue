<template>
  <v-app>
    <v-main>
      <Header/>
      <SearchBar/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import SearchBar from './components/SearchBar';

export default {
  name: 'App',
  components: {
    Header,
    SearchBar
  },

  data: () => ({
    //
  }),
};
</script>
