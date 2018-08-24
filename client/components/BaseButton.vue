<template>
  <a class="button" v-bind:class="{secondary: secondary}" v-bind:href="href" v-bind:target="target">
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
    secondary: {
      type: Boolean,
      default: false,
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
    border-image: linear-gradient(to right bottom, #3b8070, #398e77, #399c7c, #3caa80, #41b883);
    border-image-slice: 1;
    background: linear-gradient(to right bottom, #3b8070, #398e77, #399c7c, #3caa80, #41b883);
    display: inline-block;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    transition: all 0.5s ease;
    text-decoration: none;
    padding: 10px 30px;
    cursor: pointer;
    font-weight: 500;
  }

  .button.secondary {
    border-image: linear-gradient(to right bottom, #35495e, #3a5774, #40658a, #4573a1, #4b81b9);
    border-image-slice: 1;
    background: linear-gradient(to right bottom, #35495e, #3a5774, #40658a, #4573a1, #4b81b9);
    -webkit-background-clip: text;
    text-fill-color: transparent;
  }

  .button:hover {
    color: #fff;
    background: linear-gradient(to right bottom, #3b8070, #398e77, #399c7c, #3caa80, #41b883);
    transition: all 0.5s ease;
  }

  .button.secondary:hover {
    background: linear-gradient(to right bottom, #35495e, #3a5774, #40658a, #4573a1, #4b81b9);
  }
</style>
