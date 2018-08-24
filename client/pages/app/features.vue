<template>
  <div>
    <h1>Features</h1>
    <h2>Subheading</h2>
    <feature-toggle-set />
    <div>
      <button-primary target="_blank" alt>Testing</button-primary>
      <button-primary href="https://insiderx.com" target="_blank">Testing</button-primary>
    </div>
  </div>
</template>

<script>
import FeatureToggleSet from '~/components/FeatureToggleSet.vue';
import ButtonPrimary from '~/components/ButtonPrimary.vue';

export default {
  layout: 'app',
  components: {
    FeatureToggleSet,
    ButtonPrimary,
  }
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>

