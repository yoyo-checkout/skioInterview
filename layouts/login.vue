<template>
  <section class="wrapper">
    <main class="container">
      <Nuxt />
    </main>
  </section>
</template>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    min-height: 100vh;
    background-color: #f4f4f5;
    overflow: hidden;
  }

  .container {
    position: relative;
    margin: 160px auto 0;
    padding: 35px;
    width: 520px;
    max-width: 100%;
    overflow: hidden;
  }
</style>
