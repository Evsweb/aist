<template>
  <div class="bid-content">
    <div class="bid-content-wrapper">
      <div class="jour-menu">
        <div class="jour-call">
          <router-link class="link_item" active-class="link_item-active" to="/journal">Звонки</router-link>
        </div>
        <div class="jour-report">
          <router-link class="link_item" active-class="link_item-active" to="/journal">Отчеты</router-link>
        </div>
      </div>

      <div class="search-buttons">
        <div class="search arrow">
          <input type="text" placeholder="Сначала старые">
        </div>
        <div class="search calendar">
          <input type="text" placeholder="Выберите дату">
        </div>
        <div class="search calendar">
          <input type="text" placeholder="Выберите дату">
        </div>
        <div class="search arrow">
          <input type="text" placeholder="Другая дата">
        </div>
      </div>

      <div class="table">
        <table>
          <tr class="first-row">
            <th>НОМЕР</th>
            <th>ДАТА И ВРЕМЯ</th>
            <th>ТЕЛЕФОН</th>
            <th>ЗАПИСЬ РАЗГОВОРА</th>
            <th></th>
          </tr>
          <tr v-for="elem in jourCallList" v-bind:key="elem.id">
            <td class="number">{{ elem.number }}</td>
            <td class="data">{{ elem.data }}</td>
            <td class="phone">{{ elem.phone }}</td>
            <td class="record">{{ elem.record }}</td>
            <td class="icons">
              <img src="../assets/dots.png" alt="">
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jourCallList: [
        {id: 0, number: '12412421', data: '15.10.2020.19:08:12', phone: '+7(124)831-4211', record: 'запись разговора------------------------------------'},
        {id: 1, number: '41223564', data: '15.10.2020.19:08:12', phone: '+7(124)831-4211', record: 'запись разговора------------------------------------'},
        {id: 2, number: '56734523', data: '15.10.2020.19:08:12', phone: '+7(124)831-4211', record: 'запись разговора------------------------------------'},
        {id: 3, number: '34634623', data: '15.10.2020.19:08:12', phone: '+7(124)831-4211', record: 'запись разговора------------------------------------'}
      ]
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
.jour-menu {
  display: flex;
  color: 2E2E2E;
  font-size: 24px;
}
.link_item {
  color: #2E2E2E;
  font-size: 24px;
  line-height: 30px;
  text-decoration: none;
  margin-left: 20px
}
.search-buttons {
  margin-top: 20px;
  display: flex;
  width: 780px;
}
.search input{
  width: 180px;
  margin-left: 20px;
  height: 40px;
  line-height: 60px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #BDBDBD;
}
.search input::placeholder {
  font-size: 16px;
  color: #2E2E2E;
  padding-right: 20px;
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
  width: 10%;
  padding-left: 30px;
}
td.data{
  width: 20%;
  padding-left: 30px;
}
td.phone{
  width: 20%;
  padding-left: 30px;
}
td.record{
  width: 45%;
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
</style>
