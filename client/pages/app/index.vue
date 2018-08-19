<template>
  <div>
    <h1>Container Heading</h1>
    <h2>Subtitle Heading</h2>
    <FeatureList />
    <div>
      <Button target="_blank" alt>Testing</Button>
      <Button href="https://insiderx.com" target="_blank">Testing</Button>
    </div>
  </div>
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
.links {
  padding-top: 15px;
}
</style>

