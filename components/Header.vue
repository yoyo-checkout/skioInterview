<template>
  <header class="header">
    <button type="button" class="button logout-button" @click="logout">
      登出
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      if (process.browser) {
        window.localStorage.setItem('token', '');
        window.location.href = '/';
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 12%);

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 60px;
    z-index: 999;

    .logout-button {
      margin: 0 0 0 auto;
    }
  }
</style>
