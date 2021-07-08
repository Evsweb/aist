<template>
  <div>
    <Header/>
    <div class="content">
      тут могла быть ваша реклама
    </div>
  </div>  
  
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
      Header
    }
}
</script>

<style lang="scss">
.header {
  display: block;
}
</style>