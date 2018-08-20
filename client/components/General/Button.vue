<template>
  <a class="button" v-bind:class="{alt: alt}" v-bind:href="href" v-bind:target="target">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: String,
    target: String,
    alt: Boolean,
  },
  // data: () => ({
  //   attrs: {
  //     target: this.target || null,
  //     href: this.href || '#',
  //   }
  // }),
}
</script>

<style>
  .button {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 1.2rem;
  }

  .button:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .alt {
    border-color: #35495e;
    color: #35495e;
  }

  .alt:hover {
    background-color: #35495e;
  }
</style>
