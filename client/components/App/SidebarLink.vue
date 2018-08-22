<template>
  <nuxt-link class="sidebar-link" :to="to">
    <slot name="icon"></slot>
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: String,
  }
}
</script>

<style>
  .sidebar-link {
    padding: 1rem;
    font-size: 1rem;
    color: #fff;
    display: block;
    text-decoration: none;
    opacity: 0.7;
    fill: #fff;
    line-height: 1.5;
  }

  .sidebar-link.nuxt-link-active {
    opacity: 1.0;
  }

  .sidebar-link:hover,
  .sidebar-link:active {
    background-color: rgba(25, 55, 48, 0.5);
    opacity: 1.0;
  }

  .sidebar-link svg {
    height: 1rem;
    width: 1rem;
    transform: scale(2);
    margin: 0 1rem -0.2rem 0.5rem;
  }
</style>

