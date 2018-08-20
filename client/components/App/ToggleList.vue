<template>
  <div class="list">
    <Toggle v-for="feature in features" :key="feature.accessKey" v-bind="feature" />
  </div>
</template>

<script>
import Toggle from '~/components/App/Toggle.vue';

export default {
  components: {
    Toggle,
  },
  data: () => ({
    features: [
      { name: 'Offline', accessKey: 'offline', enabled: true },
      { name: 'Image Search', accessKey: 'imageSearch', enabled: false },
      { name: 'Image Diff', accessKey: 'imageDiff', enabled: false },
    ]
  }),
}
</script>

<style>
  .list {
    border: 1px solid #eee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
