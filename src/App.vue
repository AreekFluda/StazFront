<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {},

  data: () => ({}),
  mounted() {
    this.$store.dispatch("fetchLectures").catch((error) => alert(error.response.data))
  }
};
</script>
