<template>
  <section class="container">
    <div>
      <AppLogo/>
      <h1 class="title">
        App
      </h1>
      <h2 class="subtitle">
        Dark Kite Client Website
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <FeatureList />
      <Button target="_blank" alt>Testing</Button>
      <Button href="https://insiderx.com" target="_blank">Testing</Button>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import FeatureList from '~/components/FeatureList.vue';
import Button from '~/components/Button.vue';

export default {
  layout: 'app',
  components: {
    AppLogo,
    FeatureList,
    Button,
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
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

