<template>
  <transition name="overpanel">
    <div class="overpanel-mask" v-if="$store.state.overpanel.open" @click.once.self="close">
      <div class="overpanel-container" @keydown.esc="close">

        <div class="overpanel-header">
          <span class="header-text">
            <slot name="header">update</slot>
          </span>
        </div>

        <button class="close" @click.once.self="close">
          <CloseIcon />
        </button>

        <div class="overpanel-body">
          <slot name="body">
            default body
          </slot>
        </div>

        <div class="overpanel-footer">
          <slot name="footer">
            default footer
            <button class="overpanel-default-button" @click="toggle">
              OK
            </button>
          </slot>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex';
import CloseIcon from '~/static/close.svg';

export default {
  components: {
    CloseIcon,
  },
  methods: {
    ...mapMutations({
      toggle: 'overpanel/toggle',
      close: 'overpanel/close',
      open: 'overpanel/open',
    }),
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

.overpanel-default-button {
  float: right;
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

