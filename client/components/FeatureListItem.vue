<template>
  <div class="feature-container">
    <div class="feature-toggle" :class="{ disabled }">
      <div class="desc">
        <div class="label">{{label}}</div>
        <div class="key">({{accessKey}})</div>
      </div>
      <div class="toggle" v-on:click="toggleFeature(id)">
        <span class="off" v-bind:class="{ active: !enabled }">OFF</span>
        <span class="on" v-bind:class="{ active: enabled }">ON</span>
      </div>
    </div>
    <a class="feature-edit" href="#" @click="edit(id)">Editing</a>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true,
    },
    accessKey: {
      type: String,
      required: true,
    },
    enabled: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    edit: function (id) {
      this.setEditing(id);
      this.openOverpanel('EditFeature');
    },
    ...mapMutations('features', ['setEditing', 'toggleFeature']),
    ...mapMutations('overpanel', ['openOverpanel']),
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

  .label {
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
