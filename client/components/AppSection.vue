<template>
  <section class="container">
    <div class="content">
      <slot />
    </div>
    <AppFooter />
  </section>
</template>

<script>
import AppFooter from '~/components/AppFooter';

export default {
  components: {
    AppFooter,
  },
};
</script>

<style>
.container {
  display: flex;
  text-align: left;
  flex-direction: column;
  width: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 16rem;
  overflow-x: hidden;
  overflow-y: scroll;
  justify-content: space-between;
}

.content {
  padding: 1rem;
}
</style>
