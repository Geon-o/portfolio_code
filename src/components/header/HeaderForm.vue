<template>
  <v-container>
    <v-app-bar class="v-toolbar" elevate-on-scroll width="auto" app id="app_bar">
      <v-container style="width: 1480px">
        <v-layout>
          <div style="margin-left: 20px">
            <a  @click.prevent="main()" style="background-color: transparent">
              <v-img :src="require(`@/assets/logo/${logoName}.png`)" height="100" width="100"></v-img>
            </a>
          </div>
          <v-spacer></v-spacer>
          <v-btn v-for="(btnValue, index) in btnValues"
                 :key="index"
                 class="btn_name"
                 plain
                 elevation="0"
                 style="margin: 35px 10px 0px 0px;"
                 @click="scrollMove(index)">
            <h4>{{ btnValue.name }}</h4>
          </v-btn>
        </v-layout>
      </v-container>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: 'HeaderForm',
  data(){
    return{
      logoName: 'logo_white',
      btnValues: [
        {name: "about", id: 'about'},
        {name: "skills", id: 'skills'},
        {name: "project", id: 'project'},
        {name: "contact", id: 'contact'},
      ]
    }
  },
  methods:{
    scrollMove(index){
      this.$emit('onClick', this.btnValues[index].id)
    },
    main(){
      window.scroll({top: 0, left: 0, behavior: 'smooth'})
    }
  },
  created() {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    if (darkMediaQuery.matches){
      this.logoName= 'logo_black'
    }
  }
}
</script>

<style scoped>
@media (prefers-color-scheme: dark) {
  #app_bar{
    background-color: white;
  }
  .btn_name{
    color: black
  }
}
@media (prefers-color-scheme: light) {
  #app_bar{
    background-color: black;
  }
  .btn_name{
    color: white;
  }
}
</style>