<template>
  <v-app>
    <v-container class="text-center" >
      <v-card id="card">
        <v-card-title class="justify-center">{{ lecture.name }}</v-card-title>
        <v-card-subtitle>Godzina{{ lecture.hour }}</v-card-subtitle>

      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "LectureCard",
  props: ["lecture"],


}
</script>

<style scoped>
#card{
  background-color: #8fb4e5;
}

</style>