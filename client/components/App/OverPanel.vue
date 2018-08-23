<template>
  <transition name="overpanel">
    <div class="overpanel-mask" v-if="showOverPanel">
      <div class="overpanel-container">

        <div class="overpanel-header">
          <slot name="header">
            default header
          </slot>
        </div>

        <div class="overpanel-body">
          <slot name="body">
            default body
          </slot>
        </div>

        <div class="overpanel-footer">
          <slot name="footer">
            default footer
            <button class="overpanel-default-button" v-on:click="close">
              OK
            </button>
          </slot>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: function () {
    return {
      showOverPanel: true,
    };
  },
  methods: {
    close: function () {
      this.showOverPanel = false;
    }
  }
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
}

.overpanel-container {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  width: 60rem;
  background-color: #fff;
  padding: 1rem;
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

.overpanel-enter-active,
.overpanel-leave-active {
  transition: all .8s ease;
}

.overpanel-enter .overpanel-container,
.overpanel-leave-to .overpanel-container {
  right: -60rem;
}

.overpanel-enter-to .overpanel-mask,
.overpanel-leave .overpanel-mask {
  right: 0;
}

.overpanel-enter .overpanel-container,
.overpanel-leave-to .overpanel-container {
  background-color: rgba(0, 0, 0, 0);
}

.overpanel-enter-to .overpanel-mask,
.overpanel-leave .overpanel-mask {
  background-color: rgba(0, 0, 0, .5);
}
</style>

