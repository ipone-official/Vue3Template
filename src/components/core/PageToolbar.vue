<template>
  <v-app-bar app color="#007fc4" >
    <!-- Button to toggle the navigation drawer -->
    <v-btn icon @click="$emit('toggle-drawer')">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "PageToolbar",
};
</script>

<style scoped>
/* Scoped styling for additional customization if needed */
</style>
