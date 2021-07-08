<template>
  <div id="app">
    <router-view>
    <Login/>
    </router-view>
  </div>
  <!-- <router-link to="/about">About</router-link> -->
</template>

<script>
import Login from '@/views/Login.vue'

export default {
  components: {
    Login
  }
}
</script>

<style lang="scss">

@font-face {
  font-family: 'Montserrat';
  src: local('Montserrat'), local('Montserrat'),
    url('assets/Montserrat-Regular.woff2') format('woff2');
  font-weight: 100;
  font-style: normal;
}
* {
  padding: 0;
  margin: 0;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}
#app {
  text-align: center;
  color: #2c3e50;
  min-height: 970px;
  background-size:cover;
  width: 100%;
  height: 100%;
}
.app-wrapper {
  display: flex;
  padding-top: 100px;
  margin-left: 43%;
  flex-direction: column;
}
.logo {
  background: url('assets/logo.png');
  width: 187px;
  height: 103px;
}
.test {
  margin-top: 30px;
  width: 100px;
  height: 100px;
  background-color: white;
}
</style>
