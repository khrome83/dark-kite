<template>
  <div>
    <h1>Features</h1>
    <h2>Subheading</h2>
    <feature-list />
    <div>
      <base-button target="_blank" alt>Testing</base-button>
      <base-button href="https://insiderx.com" target="_blank" secondary>Testing</base-button>
    </div>
  </div>
</template>

<script>
import FeatureList from '~/components/FeatureList.vue';
import BaseButton from '~/components/BaseButton.vue';

export default {
  layout: 'app',
  components: {
    FeatureList,
    BaseButton,
  }
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>

