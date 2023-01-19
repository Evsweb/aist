<template>
  <div>
    <HeaderMy/>
    <Cont/>
  </div>  
  
</template>

<script>
import HeaderMy from '@/components/Header.vue'
import Cont from '@/components/Cont.vue'

export default {
  components: {
    HeaderMy, Cont
    }
}
</script>

<style lang="scss">
.header {
  display: block;
}
</style>