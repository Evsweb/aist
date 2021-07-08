<template>
  <div>
    <Header/>
    <Admn/>
  </div>  
  
</template>

<script>
import Header from '@/components/Header.vue'
import Admn from '@/components/Admn.vue'

export default {
  components: {
      Header, Admn
    }
}
</script>

<style lang="scss">
.header {
  display: block;
}
</style>