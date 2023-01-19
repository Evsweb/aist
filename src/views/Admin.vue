<template>
  <div>
    <HeaderMy/>
    <Admn/>
  </div>  
  
</template>

<script>
import HeaderMy from '@/components/Header.vue'
import Admn from '@/components/Admn.vue'

export default {
  components: {
    HeaderMy, Admn
    }
}
</script>

<style lang="scss">
.header {
  display: block;
}
</style>