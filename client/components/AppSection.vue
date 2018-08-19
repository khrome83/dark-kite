<template>
  <section class="container">
    <slot />
  </section>
</template>

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
  padding: 1rem;
}
</style>
