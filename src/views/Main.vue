<template>
  <div>
    <HeaderMy/>
    <div class="content">
      тут могла быть ваша реклама
    </div>
  </div>  
  
</template>

<script>
import HeaderMy from '@/components/Header.vue'

export default {
  components: {
    HeaderMy
    }
}
</script>

<style lang="scss">
.header {
  display: block;
}
</style>