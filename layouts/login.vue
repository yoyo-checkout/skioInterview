<template>
  <section class="layout__wrapper">
    <main class="layout__container">
      <Nuxt />
    </main>
  </section>
</template>

<style lang="scss" scoped>
  .layout {
    &__wrapper {
      width: 100%;
      min-height: 100vh;
      background-color: #f4f4f5;
      overflow: hidden;
    }

    &__container {
      position: relative;
      margin: 160px auto 0;
      padding: 35px;
      width: 520px;
      max-width: 100%;
      overflow: hidden;
    }
  }
</style>
