<template>
  <div class="bid-content">
    <div class="bid-content-wrapper">

      <div class="bid-name">
        Управление заявками
      </div>

      <div class="search-button">
        <div class="search">
          <input type="text" placeholder="Поиск">
        </div>
        <div class="button">
          <button @click="$emit('add')">+ Добавить заявку</button>
        </div>
      </div>

      <div class="table">
        <table>
          <tr class="first-row">
            <th>НОМЕР ЗАЯВКИ</th>
            <th>АДРЕС</th>
            <th>ТИП</th>
            <th>СТАТУС</th>
            <th></th>
          </tr>
          <tr v-for="elem in bidList" v-bind:key="elem.id">
            <td class="number">{{ elem.number }}</td>
            <td class="adres">{{ elem.adres }}</td>
            <td class="type"><p class="type-style">{{ elem.type }}</p></td>
            <td class="status"><p class="status-style">{{ elem.status }}</p></td>
            <td class="icons">
              <img src="../assets/pencil.png" alt="">
              <img src="../assets/red-cross.png" alt="">
              <img src="../assets/grey-arrow.png" alt="">
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seen: String,
    bidList: Array
  },
  data() {
    return {
     
    }
  },
  methods: {
    addOrder: function() {
      this.seen = 'Add'
    }
  }
}
</script>

<style scoped lang="scss">
.bid-content {
  max-width: 100%;
  height: 100%;
}
.bid-content-wrapper {
  max-width: 1180px;
  margin: 0 auto;
  text-align: left;
}
.bid-name {
  color: 2E2E2E;
  font-size: 24px;
}
.search-button {
  display: flex;
  margin-top: 20px;
  padding-top: 14px;
}
.search {
  width: 780px;
}
.search input{
  height: 60px;
  width: 100%;
  line-height: 60px;
  font-size: 24px;
  border: none;
  border-bottom: 2px solid #BDBDBD;
}
.search input::placeholder {
  font-size: 20px;
  color: #BDBDBD;
  text-align: right;
  padding-right: 20px;
}
.button {
  margin-left: 20px;
  width: 380px;
}
.button button {
  border-radius: 5px;
  font-size: 18px;
  color: #ffffff;
  width: 100%;
  height: 60px;
  background: linear-gradient(270deg, #2F80ED -7.59%, #69A9FF 103.8%);
  border: none;
}

//таблица
table {
  margin-top: 20px;
  width:1180px;
  border-spacing: 0;
}
th {
  font-size: 14px;
  color: #fff;
  padding-left: 30px;
}
td {
  padding-top: 20px;
  padding-bottom: 20px;
}
td.number{
  width: 15%;
  padding-left: 30px;
}
td.adres{
  width: 35%;
  padding-left: 30px;
}
td.type{
  width: 15%;
  padding-left: 30px;
}
td.status{
  width: 15%;
  padding-left: 30px;
}
td.icons {
  width: 10%;
}
td.icons img {
  margin-left: 8px;
  cursor: pointer;
}
.first-row {
  height: 40px;
  background: linear-gradient(0.02deg, #2F80ED -4.31%, #69A9FF 105.33%);
  border-radius: 0 0 5px 5px;
}
.type-style {
  color: #2F80ED;
  width: 100px;
  padding: 5px;
  text-align: center;
  background-color: #DFECFF;
  border-radius: 5px;
}
.status-style {
  color: #4F4F4F;
  width: 100px;
  padding: 5px;
  text-align: center;
  background-color: #ECECEC;
  border-radius: 5px;
}
</style>
