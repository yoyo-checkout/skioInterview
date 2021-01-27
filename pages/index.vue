<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        skioInterview
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth, Course, Member } from '@/apis';

export default {
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
