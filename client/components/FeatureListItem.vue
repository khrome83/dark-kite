<template>
  <div class="feature-container">
    <div class="feature-toggle" :class="{ disabled }">
      <div class="desc">
        <div class="label">{{label}}</div>
        <div class="key">({{accessKey}})</div>
      </div>
      <div class="feature-controls">
        <div class="toggle" v-on:click="toggleFeature(id)">
          <template v-if="!disabled">
            <span class="off-label" v-bind:class="{ active: !enabled }">OFF</span>
            <span class="on-label" v-bind:class="{ active: enabled }">ON</span>
          </template>
          <template v-else>
            <span class="disabled-label">DISABLED</span>
          </template>
        </div>
        <div class="toolbar-menu" :class="{ showMenu }" @click="toggleMenu" @mouseleave="closeMenu">
          <ConfigureMenuIcon />
          <div class="toolbar-menu-popup" v-if="showMenu">
            <div class="toolbar-close-icon">
              <ConfigureMenuIcon />
            </div>
            <template v-if="!disabled">
              <a class="toolbar-button toolbar-edit" href="#" @click="edit(id)">Edit Feature</a>
              <a class="toolbar-button toolbar-schedule" href="#" @click="edit(id)">Manage Schedule</a>
              <a class="toolbar-button toolbar-webhook" href="#" @click="edit(id)">Configure Webhook</a>
              <a class="toolbar-button toolbar-activity" href="#" @click="edit(id)">View Activity</a>
              <a class="toolbar-button toolbar-disable" href="#" @click="toggleDisabled(id)">Disable Feature</a>
            </template>
            <template v-else>
              <a class="toolbar-button toolbar-reenable" href="#" @click="toggleDisabled(id)">Enable Feature</a>
              <a class="toolbar-button toolbar-activity" href="#" @click="edit(id)">View Activity</a>
              <a class="toolbar-button toolbar-delete" href="#" @click="deleteFeature(id)">Delete Feature</a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ConfigureMenuIcon from '~/static/configure-menu.svg';

export default {
  components: {
    ConfigureMenuIcon,
  },
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
    edit (id) {
      this.setEditing(id);
      this.openOverpanel('EditFeature');
    },
    ...mapMutations('features', ['setEditing', 'toggleFeature', 'toggleDisabled', 'deleteFeature']),
    ...mapMutations('overpanel', ['openOverpanel']),
  }
}
</script>

<style scoped>
  .feature-toggle {
    border: 1px solid #d6d5d5;
    border-radius: 0.25rem;
    padding: 1rem;
    margin: 1rem 0;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }

  .disabled.feature-toggle {
    border-color: #eee;
  }

  .label {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .key {
    font-size: 0.85rem;
    font-weight: 300;
  }

  .disabled .label,
  .disabled .key {
    color: #747474;
  }

  .toggle {
    cursor: pointer;
    background-color: #d6d5d5;
    user-select: none;
    border-radius: 0.25rem;
  }

  .disabled .toggle {
    background-color: #eee;
    cursor: default;
  }

  .on-label,
  .off-label,
  .disabled-label {
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

  .disabled-label {
    color: #8d8d8d;
    width: 9rem;
  }

  .on-label.active,
  .off-label.active {
    border-color: #d6d5d5;
    background-color: #fff;
  }

  .on-label.active {
    color: #62b587;
  }

  .off-label.active {
    color: #F44;
  }

  .feature-controls {
    width: 14rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
  }

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

  .toolbar-button {
    color: #fff;
    text-decoration: none;
    padding: 1rem;
    display: block;
    opacity: 0.75;
    line-height: 1.2;
    font-size: 1.2rem;
    user-select: none;
  }

  .toolbar-button:hover,
  .toolbar-button:active {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }

</style>
