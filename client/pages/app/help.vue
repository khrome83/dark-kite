<template>
  <div>
    <h1>Help</h1>
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
  }
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>

