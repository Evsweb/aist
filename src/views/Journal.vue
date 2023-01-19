<template>
  <div>
    <HeaderMy/>
    <JournCall/>
  </div>  
  
</template>

<script>
import HeaderMy from '@/components/Header.vue'
import JournCall from '@/components/JournCall.vue'

export default {
  components: {
    HeaderMy, JournCall
    }
}
</script>

<style lang="scss">
.header {
  display: block;
}
</style>