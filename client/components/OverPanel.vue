<template>
  <transition name="overpanel">
    <div class="overpanel-mask" v-if="$store.state.open" @click.self="$store.commit('close')">
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
            <button class="overpanel-default-button" @click="$store.commit('toggle')">
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
      console.log('close')
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
  padding: 1rem;
  transform-origin: right;
  transform: translateX(0);
  transition: transform .3s ease;

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

