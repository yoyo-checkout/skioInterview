<template>
  <header class="header">
    <nuxt-link v-if="this.$route.name === 'account'" to="/courses" class="button">
      課程
    </nuxt-link>
    <nuxt-link v-if="this.$route.name === 'courses'" to="/account" class="button">
      用戶
    </nuxt-link>
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
        window.localStorage.setItem('expires', '');
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
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: 0 10px;
    height: 60px;
    background-color: $--header-background-color;
    box-shadow: $--box-shadow-base;
    z-index: 999;

    .logout-button {
      margin: 0 0 0 auto;
    }
  }
</style>
