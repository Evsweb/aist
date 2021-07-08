<template>
  <div class="auth_form">
    <div class="auth_wrapper">
      <div class="enter">Вход</div>
      <div class="enter-description">Введите логин и пароль для того, чтобы войти в систему</div>
      <input v-model="login" placeholder="Введите логин">
      <input type="password" v-model="pass" placeholder="Введите пароль">
      <button type="sumbit" v-on:click='enter'>
        <router-link class="link_item" active-class="link_item-active" to="/choose">Войти</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import Choose from '../views/Choose.vue'

export default {
  name: 'Choose',
  data() {
    return {
      login: '',
      pass: ''
    } 
  },
  methods: {
    enter: function () {
      this.$router.push(Choose).catch(()=>{})
      // if (this.login == 'admin' && this.pass == 'admin') {
      //   this.$router.push("/about").catch(()=>{});
      // } else {
      //   alert('неверный логин или пароль')
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.auth_form {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: -120px;
  width: 450px;
  height: 495px;
  background-color: #ffffff;
}
.auth_wrapper {
  margin-left: 50px;
  margin-right: 50px;
}
.enter { 
  color: #333333;
  font-size: 24px;
  font-weight: bold;
  margin-top: 40px;
}
.enter-description {
  margin-top: 30px
}
input {
  font-size: 16px;
  margin-top: 46px;
  float: left;
  width: 100%;
  border: none;
  border-bottom: 1px solid #BDBDBD;
  line-height: 25px;
}
.input::placeholder {
  font-size: 14px;
  color: #4F4F4F;
  line-height: inherit;
}
input:focus {
  outline: none;
  border-bottom: 1px solid #979797;
}
button {
  margin-top: 45px;
  width: 100%;
  height: 50px;
  background-color: #2F80ED;
  border: none;
  font-size: 16px;
  color: #ffffff;
  border-radius: 5px;
}
.link_item {
  color: white;
  text-decoration: none;
}
.enter-description {
  font-size: 14px;
}
</style>
