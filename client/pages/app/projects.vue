<template>
  <div>
    <h1>Projects</h1>
    <h2>Subheading</h2>
    <div>
      <base-button target="_blank" alt>Testing</base-button>
      <base-button href="https://insiderx.com" target="_blank" secondary>Testing</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/BaseButton.vue';

export default {
  layout: 'app',
  components: {
    BaseButton,
  },
  async fetch ({ store, params }) {
    await store.dispatch('projects/fetchProjects');
  },
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>

