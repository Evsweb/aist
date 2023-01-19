<template>
  <div>
    <HeaderMy/>
    <Bid v-if="seen == 'Bid'" @add="add()" :bidList=bidList />
    <BidAdd v-if="seen == 'Add'" @bid="bid()" :bidList=bidList />
  </div>  
  
</template>

<script>
import HeaderMy from '@/components/Header.vue'
import Bid from '@/components/Bid.vue'
import BidAdd from '@/components/BidAdd.vue'

export default {
  components: {
    HeaderMy, Bid, BidAdd
    },
  data() {
    return {
    seen: 'Bid',
    bidList: [
      {id: 0, number: '#12314124', adres: 'Пермь, Компрос 15 кв.3', type: 'Платная', status: 'Новая'},
      {id: 1, number: '#42314344', adres: 'Пермь, Грачева 119 кв.42', type: 'Платная', status: 'Новая'},
      {id: 2, number: '#74154123', adres: 'Пермь, Строителей 24а кв.53', type: 'Платная', status: 'Новая'},
      {id: 3, number: '#23252312', adres: 'Осенцы, Ленина 2 кв.7', type: 'Платная', status: 'Новая'}
    ]
    }
  },
  methods: {
    add: function() {
      this.seen = 'Add'
    },
    bid: function() {
      this.seen = 'Bid'
    }
  }
}
</script>

<style lang="scss">
.header {
  display: block;
}
</style>