<template>
  <div>
    <h1>Billing</h1>
    <h2>Subheading</h2>
    <div>
      <button-primary target="_blank" alt>Testing</button-primary>
      <button-primary href="https://insiderx.com" target="_blank">Testing</button-primary>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '~/components/ButtonPrimary.vue';

export default {
  layout: 'app',
  components: {
    ButtonPrimary,
  }
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>

