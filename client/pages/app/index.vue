<template>
  <div>
    <h1>Entrance</h1>
    <h2>Subheading</h2>
    <ToggleList />
    <div>
      <Button target="_blank" alt>Testing</Button>
      <Button href="https://insiderx.com" target="_blank">Testing</Button>
      <button-primary>Primary</button-primary>
      <button-secondary>Secondary</button-secondary>
    </div>
  </div>
</template>

<script>
import ToggleList from '~/components/App/ToggleList.vue';
import Button from '~/components/General/Button.vue';
import ButtonPrimary from '~/components/ButtonPrimary.vue';
import ButtonSecondary from '~/components/ButtonSecondary.vue';

export default {
  layout: 'app',
  components: {
    ToggleList,
    Button,
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

