<template>
  <div>
    <h1>
      登入
    </h1>

    <form class="form">
      <div class="form-item">
        <label class="label">帳號</label>
        <input class="input" type="text" autocomplete="off" placeholder="請輸入帳號" />
      </div>
      <div class="form-item">
        <label class="label">密碼</label>
        <input class="input" type="password" autocomplete="off" placeholder="請輸入密碼">
      </div>
    </form>

    <div class="login-button">
      <button type="button" class="button">
        登入
      </button>
    </div>
  </div>
</template>

<script>
import { Auth, Course, Member } from '@/apis';

export default {
  layout: 'login',
  created() {
    this.login();
    this.getCourses();
    this.getMember();
  },
  methods: {
    async login() {
      console.log('login');
      const data = await Auth.login();

      if (process.browser) {
        localStorage.setItem('token', data.access_token);
      }
      console.log(data);
      console.log('----------');
    },
    async getCourses() {
      console.log('course');
      const data = await Course.getCourses();
      console.log(data);
      console.log('----------');
    },
    async getMember() {
      console.log('member');
      const data = await Member.getUser();
      console.log(data);
      console.log('----------');
    },
  },
}
</script>

<style lang="scss" scoped>
  .login-button {
    text-align: center;
  }
</style>
