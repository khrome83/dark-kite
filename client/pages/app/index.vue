<template>
  <div>
    <h1>Entrance</h1>
    <h2>Subheading</h2>
    <div>
      <button-primary>Primary</button-primary>
      <button-secondary>Secondary</button-secondary>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '~/components/ButtonPrimary.vue';
import ButtonSecondary from '~/components/ButtonSecondary.vue';

export default {
  layout: 'app',
  components: {
    ButtonPrimary,
    ButtonSecondary,
  }
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>

