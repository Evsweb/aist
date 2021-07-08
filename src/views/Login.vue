<template>
  <div class="main">
    <div class="app-wrapper">
      <div class="logo"></div>
      <AuthForm />
    </div>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue'

export default {
  components: {
    AuthForm
  }
}
</script>

<style lang="scss" scoped>
.main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background: url('../assets/login-bg.jpg') no-repeat center center;
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
  background: url('../assets/logo.png');
  width: 187px;
  height: 103px;
}
</style>
