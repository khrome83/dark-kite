<template>
  <section class="container">
    <FeatureList />
    <div>
      <Button target="_blank" alt>Testing</Button>
      <Button href="https://insiderx.com" target="_blank">Testing</Button>
    </div>
  </section>
</template>

<script>
import FeatureList from '~/components/FeatureList.vue';
import Button from '~/components/Button.vue';

export default {
  layout: 'app',
  components: {
    FeatureList,
    Button,
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
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

