<template>
  <div class="feature-container" :class="{ disabled }">
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
      <toolbar-menu :disabled="disabled">
        <template slot="active">
          <a href="#" @click="editFeature(id)">Edit Feature</a>
          <a href="#" @click="manageSchedule(id)">Manage Schedule</a>
          <a href="#" @click="configWebhook(id)">Configure Webhook</a>
          <a href="#" @click="viewActivity(id)">View Activity</a>
          <a href="#" @click="toggleDisabled(id)">Disable Feature</a>
        </template>
        <template slot="disabled">
          <a href="#" @click="toggleDisabled(id)">Enable Feature</a>
          <a href="#" @click="viewActivity(id)">View Activity</a>
          <a href="#" @click="deleteFeature(id)">Delete Feature</a>
        </template>
      </toolbar-menu>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ToolbarMenu from '~/components/ToolbarMenu';

export default {
  components: {
    ToolbarMenu,
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
  methods: {
    editFeature (id) {
      this.setEditing(id);
      this.openOverpanel('FeatureEdit');
    },
    viewActivity (id) {
      this.setEditing(id);
      this.openOverpanel('FeatureActivity');
    },
    manageSchedule (id) {
      this.setEditing(id);
      this.openOverpanel('FeatureSchedule');
    },
    configWebhook (id) {
      this.setEditing(id);
      this.openOverpanel('FeatureWebhook');
    },
    ...mapMutations('features', ['setEditing', 'toggleFeature', 'toggleDisabled', 'deleteFeature']),
    ...mapMutations('overpanel', ['openOverpanel']),
  }
}
</script>

<style scoped>
  .feature-container {
    border: 1px solid #d6d5d5;
    border-radius: 0.25rem;
    padding: 1rem;
    margin: 1rem 0;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }

  .disabled.feature-container {
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
</style>
