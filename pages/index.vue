<template>
  <div>
    <h1>
      登入
    </h1>

    <form class="form">
      <div class="form-item">
        <label class="label">帳號</label>
        <input v-model="form.account" class="input" type="text" autocomplete="off" placeholder="請輸入帳號">
      </div>
      <div class="form-item">
        <label class="label">密碼</label>
        <input v-model="form.password" class="input" type="password" autocomplete="off" placeholder="請輸入密碼">
      </div>
    </form>

    <div class="login-button">
      <button type="button" class="button" @click="login">
        登入
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  layout: 'login',
  data() {
    return {
      form: {
        account: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions('auth', [
      'doLogin',
    ]),

    login() {
      this.doLogin({
        form: this.form,
      });
    },
  },
}
</script>

<style lang="scss" scoped>
  .login-button {
    text-align: center;
  }
</style>
