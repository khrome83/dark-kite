<template>
  <section class="container">
    <div class="content">
      <slot />
    </div>
    <Footer />
  </section>
</template>

<script>
import Footer from '~/components/App/Footer';

export default {
  components: {
    Footer,
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
  left: 13rem;
  overflow-x: hidden;
  overflow-y: scroll;
  justify-content: space-between;
}

.content {
  padding: 1rem;
}
</style>
