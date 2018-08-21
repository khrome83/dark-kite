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
    opacity: 0.8;
    fill: #fff;
    line-height: 1.5;
  }

  .sidebar-link.nuxt-link-active {
    opacity: 1.0;
  }

  .sidebar-link:hover {
    background-color: #336f61;
    opacity: 1.0;
  }

  .sidebar-link svg {
    height: 1rem;
    width: 1rem;
    transform: scale(1.5);
    margin: 0 1rem 0 0.5rem;
  }
</style>

