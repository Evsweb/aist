<template>
  <div class="header-wrapper">
    <div class="header-logo">
      <router-link class="link_item" active-class="link_item-active" to="/">
        <img src="../assets/logo-in.png" alt="">
      </router-link>
    </div>
    <div class="header-items">
      <div class="journal header_item">
        <router-link class="link_item" active-class="link_item-active" to="/journal">Журнал</router-link>
      </div>
      <div class="upravl header_item">
        <router-link class="link_item" active-class="link_item-active" to="/control">Управление</router-link>
      </div>
      <div class="dispetch header_item">
        <router-link class="link_item" active-class="link_item-active" to="/dispetch">Диспетчеризация</router-link>
      </div>
      <div class="administ header_item">
        <router-link class="link_item" active-class="link_item-active" to="/admin">Администрирование</router-link>
      </div>
    </div>
    <div class="header-auth">
      Вася Пупкин
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMy',
  data(){
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.header-items {
  display: flex;
  flex-direction: row;
}

.link_item {
  color: #2E2E2E;
  font-size: 18px;
  line-height: 30px;
  text-decoration: none;
  margin-left: 20px
}
.link_item:hover {
  text-decoration: underline;
}
.link_item-active {
  color: #2F80ED;
  text-decoration: underline;
}
.header-wrapper {
  display: flex;
  max-width: 1180px;
  margin:0 auto;
  margin-top: 24px;
  margin-bottom: 50px;
  justify-content: space-between;
}
.header-auth {
  color: #2E2E2E;
  font-size: 20px;
  line-height: 30px;
}
.header-auth::after {
  content: url(../assets/arrow-bottom.png);
}
</style>
