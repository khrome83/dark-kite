<template>
  <div>
    <h1>Organization</h1>
    <h2>Subheading</h2>
    <ToggleList />
    <div>
      <Button target="_blank" alt>Testing</Button>
      <Button href="https://insiderx.com" target="_blank">Testing</Button>
    </div>
  </div>
</template>

<script>
import ToggleList from '~/components/App/ToggleList.vue';
import Button from '~/components/General/Button.vue';

export default {
  layout: 'app',
  components: {
    ToggleList,
    Button,
  }
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>

