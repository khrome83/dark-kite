<template>
  <div class="toolbar-menu" :class="{ showMenu }" @click="toggleMenu" @mouseleave="closeMenu">
    <ConfigureMenuIcon />
    <div class="toolbar-menu-popup" v-if="showMenu">
      <div class="toolbar-close-icon">
        <ConfigureMenuIcon />
      </div>
      <div class="toolbar-buttons">
        <template v-if="!disabled">
          <slot name="active">
            <a href="#">Link Goes Here</a>
          </slot>
        </template>
        <template v-else>
          <slot name="disabled">
            <a href="#">Link Goes Here</a>
          </slot>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ConfigureMenuIcon from '~/static/configure-menu.svg';

export default {
  components: {
    ConfigureMenuIcon,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      showMenu: false,
    };
  },
  methods: {
    closeMenu () {
      this.showMenu = false;
    },
    toggleMenu () {
      this.showMenu = !this.showMenu;
    },
  }
}
</script>

<style scoped>
  .toolbar-menu {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    fill: #8d8d8d;
    position: relative;
  }

  .toolbar-menu svg {
    height: 1rem;
    width: 1rem;
    transform: scale(2);
    align-self: center;
  }

  .toolbar-menu:hover svg,
  .toolbar-menu:active svg {
    transform: scale(2.25);
    fill: #000;
  }

  .toolbar-menu.showMenu svg {
    fill: #fff;
  }

  .toolbar-menu-popup {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 20rem;
    border: 1px solid #d6d5d5;
    border-radius: 0.25rem;
    background-image: linear-gradient(to left top, rgba(60, 60, 60, .9), rgba(46, 46, 46, 0.9), rgba(33, 33, 33, .9), rgba(20, 20, 20, .9), rgba(0, 0, 0, .9));
    cursor: default;
    z-index: 1;
  }

  .toolbar-close-icon {
    position: absolute;
    top: 1.25rem;
    right: 0.45rem;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    z-index: 2;
  }

  .toolbar-buttons a {
    color: #fff;
    text-decoration: none;
    padding: 1rem;
    display: block;
    opacity: 0.75;
    line-height: 1.2;
    font-size: 1.2rem;
    user-select: none;
  }

  .toolbar-buttons a:hover,
  .toolbar-buttons a:active {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
