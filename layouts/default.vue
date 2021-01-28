<template>
  <section class="layout__wrapper">
    <Header />

    <main class="layout__container">
      <Nuxt />
    </main>

    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
  .layout {
    &__wrapper {
      width: 100%;
      min-height: 100vh;
      overflow: hidden;
    }

    &__container {
      margin: 60px 0 0;
      min-height: calc(100vh - 120px);
    }
  }
</style>
