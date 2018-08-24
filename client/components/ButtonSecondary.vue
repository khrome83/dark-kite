<template>
  <a class="button" v-bind:href="href" v-bind:target="target">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    target: String,
  },
}
</script>

<style scoped>
  .button {
    margin: 1em;
    color: transparent;
    font-size: 1.2rem;
    border: 2px solid transparent;
    border-image: linear-gradient(to right bottom, #35495e, #3a5774, #40658a, #4573a1, #4b81b9);
    border-image-slice: 1;
    background: linear-gradient(to right bottom, #35495e, #3a5774, #40658a, #4573a1, #4b81b9);
    display: inline-block;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    transition: all 0.5s ease;
    text-decoration: none;
    padding: 10px 30px;
    cursor: pointer;
    font-weight: 500;
  }

  .button:hover {
    color: #fff;
    background: linear-gradient(to right bottom, #35495e, #3a5774, #40658a, #4573a1, #4b81b9);
    transition: all 0.5s ease;
  }
</style>
