<template>
  <div>
    <Header/>
    <JournCall/>
  </div>  
  
</template>

<script>
import Header from '@/components/Header.vue'
import JournCall from '@/components/JournCall.vue'

export default {
  components: {
      Header, JournCall
    }
}
</script>

<style lang="scss">
.header {
  display: block;
}
</style>