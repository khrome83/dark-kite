<template>
  <component :is="element" v-bind="linkProps" class="button" :class="{secondary: secondary, danger: danger}">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '#',
    },
    title: {
      type: String,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    element () {
      return (/((https{0,1}|ftp|tel|mail):\/\/)|^www.|.{1}(com|net|org|io)/i.test(this.to)) ? 'a' : 'router-link';
    },
    linkProps () {
      if (this.element === 'a') {
        return {
          href: this.to,
          target: '_blank',
          rel: 'noopener',
          title: this.title,
        }
      }

      return {
        to: this.to,
        title: this.title,
      }
    }
  },
}
</script>

<style scoped>
  .button,
  .button:hover,
  .button:active {
    position: relative;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: transparent;
    padding: 0.8rem 2rem;
    display: inline-block;
    font-size: 1.2rem;
    text-decoration: none;
    cursor: pointer;
    color: transparent;
    background: linear-gradient(to right bottom, #3b8070, #398e77, #399c7c, #3caa80, #41b883);
    -webkit-background-clip: text;
    text-fill-color: transparent;
    margin: 1rem;
  }

  .button::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to right bottom, #3b8070, #398e77, #399c7c, #3caa80, #41b883);
    content: '';
    z-index: -2;
    border-radius: 4px;
  }

  .button::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    content: '';
    z-index: -1;
    border-radius: 4px;
    border: 1px solid transparent;
    background-clip: padding-box;
  }

  .button:hover::after {
    border: 2px solid transparent;
  }

  .button.secondary,
  .button.secondary:hover,
  .button.secondary:active {
    color: transparent;
    background: linear-gradient(to right bottom, #35495e, #3a5774, #40658a, #4573a1, #4b81b9);
    -webkit-background-clip: text;
    text-fill-color: transparent;
  }

  .button.secondary::before {
    background: linear-gradient(to right bottom, #35495e, #3a5774, #40658a, #4573a1, #4b81b9);
  }

  .button.danger,
  .button.danger:hover,
  .button.danger:active {
    color: transparent;
    background: linear-gradient(to right bottom, #922648, #a92851, #c12959, #d92a61, #f22b69);
    -webkit-background-clip: text;
    text-fill-color: transparent;
  }

  .button.danger::before {
    background: linear-gradient(to right bottom, #922648, #a92851, #c12959, #d92a61, #f22b69);
  }
</style>
