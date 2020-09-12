<template>
  <div>
    <v-card
      class="mx-auto result-card"
      max-width="750"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">CEO</div>
          <v-list-item-title class="headline mb-1">Apple</v-list-item-title>
          <v-list-item-subtitle>Timothy Donald Cook is an American business executive, philanthropist and industrial engineer. Cook is the chief executive officer of Apple Inc., and previously served as the company's chief operating officer under its cofounder Steve Jobs.</v-list-item-subtitle>
        </v-list-item-content>
  
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>
  
      <v-card-actions>
        <v-btn text>Company Website</v-btn>
      </v-card-actions>
    </v-card>

  </div>
</template>

<script>
export default {
  name: 'Result',
  data () {
      return {
      }
    }
}

</script>

<style scoped>

  .result-card {
    margin-top: 20px;
  }

</style>
