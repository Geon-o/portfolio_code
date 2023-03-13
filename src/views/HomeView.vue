<template>
  <portfolio/>
</template>

<script>
import Portfolio from "@/components/Portfolio";
import {mapActions} from "vuex";

export default {
  name: 'HomeView',
  components: {
    Portfolio,
  },
  methods:{
    ...mapActions([
      'viewCountUp'
    ])
  },
  created() {
    console.log("실행")
    this.viewCountUp(true)
  }
}
</script>
