<template>
  <v-app>
    <v-row>
      <v-col cols="2" v-for="lecture in lectures" :key="lecture.id">
        <LectureCard :lecture="lecture"/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import LectureCard from "@/components/LectureCard";


export default {
  name: "Lectures",
  components: {LectureCard},
  computed: {
    lectures() {
      return this.$store.getters.getLectures;
    }

  }
}
</script>

<style scoped>


</style>