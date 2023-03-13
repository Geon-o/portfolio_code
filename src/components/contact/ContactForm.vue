<template>
  <div>
    <div align="center">
      <h1 style="padding: 35px 0px 10px 0px;">CONTACT</h1>
    </div>
    <v-container class="contact_in_content">
      <v-layout justify-center>
        <v-icon style="margin-right: 20px;">mdi-gmail</v-icon>
        <h3>shjwin96@gmail.com</h3>
      </v-layout>
      <v-layout justify-center style="margin-top: 10px;">
        <div style="width: 30px; height: 30px; margin-right: 20px">
          <v-img :src="require('@/assets/githubicon.png')"></v-img>
        </div>
        <a class="contact" target="_blank" href="https://github.com/Geon-o">Geon-o's github</a>
      </v-layout>
      <v-layout justify-center>
        <div style="width: 50px; height: 50px;">
          <v-img :src="require('@/assets/skillSet/notion.png')"></v-img>
        </div>
        <a class="contact" target="_blank" style="margin-top: 10px;" href="https://quartz-lead-0f5.notion.site/Geon-o-Jin-062d2b9b4bd741b68854e99baa018e7c">Geon-o's Notion</a>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ContactForm"
}
</script>

<style scoped>
.contact_in_content{
  width: 300px;
}
.contact{
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: royalblue;
}
</style>