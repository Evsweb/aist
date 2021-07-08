<template>
  <div class="main">
    <div class="app-wrapper">
      <div class="logo"></div>
      <RoleForm />
    </div>
  </div>
</template>

<script>
import RoleForm from '@/components/RoleForm.vue'

export default {
  components: {
    RoleForm
  },
  methods: {

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
.choose {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 200px;
  height: 200px;
  color: #ffffff;
}
.choose button {
  color: #000000;
  margin-top: 10px;
  width: 200px;
  height: 40px;
  border: none;
  background-color: #ffffff;
}
</style>
