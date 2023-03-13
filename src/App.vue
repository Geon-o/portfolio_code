<template>
  <v-app>
    <v-main style="padding-top: 40px" class="main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@media (prefers-color-scheme: dark) {
  .main{
    background-color: black;
  }
}
@media (prefers-color-scheme: light) {
  .main{
    background-color: white;
  }
}

</style>
