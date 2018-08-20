<template>
  <nav class="sidebar">
    <slot name=logo />
    <slot name="primary" />
    <slot name="secondary" />
  </nav>
</template>

<style>
nav {
  background-color: #3b8070;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 16rem;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
}
</style>
