<template>
  <div>
    <h1>Configuration</h1>
    <h2>Subheading</h2>
    <div>
      <base-button alt>Testing</base-button>
      <base-button to="https://insiderx.com" secondary>Testing</base-button>
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

