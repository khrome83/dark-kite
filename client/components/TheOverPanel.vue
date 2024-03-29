<template>
  <transition name="overpanel">
    <div class="overpanel-mask" v-if="overpanelVisible" @click.once.self="closeOverpanel">
      <div class="overpanel-container" @keydown.esc="closeOverpanel">

        <div class="overpanel-header">
          <span class="header-text">
            <slot name="header">update</slot>
          </span>
        </div>

        <button class="close" @click="closeOverpanel">
          <CloseIcon />
        </button>
        <div class="overpanel-content">
          <div class="overpanel-body">
            <component :is="component"></component>
          </div>

          <div class="overpanel-footer">
            <a class="close-link" @click.native="closeOverpanel">Close</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
import CloseIcon from '~/static/close.svg';

export default {
  components: {
    CloseIcon,
  },
  computed: {
    ...mapState('overpanel', ['overpanelVisible', 'overpanelComponent'])
  },
  data() {
    return {
      component: null,
    };
  },
  methods: {
    ...mapMutations('overpanel', ['closeOverpanel']),
  },
  watch: {
    overpanelComponent(componentName) {
      if (!componentName) return;

      Vue.component(componentName, () => import(`./overpanel/${componentName}`));

      this.component = componentName;
    }
  },
}
</script>

<style>
.overpanel-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, .5);
  transition: background-color 0.3s ease;
}

.overpanel-container {
  position: absolute;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  width: 60rem;
  background-color: #fff;
  padding: 4rem 2rem 4rem 6rem;
  transform-origin: right;
  transform: translateX(0);
  transition: transform .3s ease;
}

.overpanel-header {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 4rem;
  background: linear-gradient(to top right, #35495e, #3a5774, #40658a, #4573a1, #4b81b9);
}

.header-text {
  display: inline-block;
  transform: rotate(180deg);
  writing-mode: tb-rl;
  color: #fff;
  font-size: 2rem;
  line-height: 2;
  padding: 0 0 2rem 0;
  width: 100%;
  white-space: nowrap;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.close {
  position: absolute;
  display: block;
  background: transparent;
  border: none;
  top: 1rem;
  right: 1rem;
  fill: #40658a;
  cursor: pointer;
  margin: 0;
  padding: 0.5rem;
  border-radius: 100%;
  border: 1px solid transparent;
  outline: 0;
}

.close::before {
  content: 'close';
  display: block;
  position: absolute;
  width: 3rem;
  color: transparent;
  margin-left: -3.5rem;
  line-height: 1.6;
}

.close:hover::before,
.close:active::before {
  color: #40658a
}

.close:hover,
.close:active {
  fill: #4b81b9;
  border-color: #4b81b9;
}

.close svg {
  width: 1.5rem;
  height: 1.3rem;
}

.overpanel-header h3 {
  margin-top: 0;
  color: #42b983;
}

.overpanel-body {
  margin: 20px 0;
}

.overpanel-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
}

.overpanel-enter,
.overpanel-leave-to{
  background-color: rgba(0, 0, 0, 0);
}

.overpanel-enter-to,
.overpanel-leave {
  background-color: rgba(0, 0, 0, .5);
}

.overpanel-enter .overpanel-container,
.overpanel-leave-to .overpanel-container {
  transform-origin: right;
  transform: translateX(60rem);
}

.overpanel-enter-to .overpanel-container,
.overpanel-leave .overpanel-container {
  transform-origin: right;
  transform: translateX(0);
}
</style>

