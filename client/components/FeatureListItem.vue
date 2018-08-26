<template>
  <div class="feature-toggle">
    <div class="desc">
      <div class="name">{{name}}</div>
      <div class="key">({{accessKey}})</div>
    </div>
    <div class="toggle" v-on:click="toggle">
      <span class="off" v-bind:class="{ active: !isEnabled }">OFF</span>
      <span class="on" v-bind:class="{ active: isEnabled }">ON</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    accessKey: String,
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      isEnabled: this.enabled,
    };
  },
  methods: {
    toggle: function () {
      this.isEnabled = !this.isEnabled;
    }
  }
}
</script>

<style>
  .feature-toggle {
    border: 1px solid #eee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem 0;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }

  .name {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .key {
    font-size: 0.85rem;
    font-weight: 300;
  }

  .toggle {
    cursor: pointer;
    background-color: #eee;
    user-select: none;
    border-radius: 0.25rem;
  }

  .on,
  .off {
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    color: #666;
    display: inline-block;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    width: 4.5rem;
    text-align: center;
  }

  .on.active,
  .off.active {
    border-color: #eee;
    background-color: #fff;
  }

  .on.active {
    color: #62b587;
  }

  .off.active {
    color: #F44;
  }
</style>