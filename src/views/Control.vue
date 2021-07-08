<template>
  <div>
    <Header/>
    <Cont/>
  </div>  
  
</template>

<script>
import Header from '@/components/Header.vue'
import Cont from '@/components/Cont.vue'

export default {
  components: {
      Header, Cont
    }
}
</script>

<style lang="scss">
.header {
  display: block;
}
</style>