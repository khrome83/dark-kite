<template>
  <div class="project-container" :class="{ disabled }">
    <div class="desc">
      <div class="label">{{label}}</div>
      <div class="identifier">({{identifier}})</div>
    </div>
    <div class="project-controls">
      <toolbar-menu :disabled="disabled">
        <template slot="active">
          <a href="#">Edit Project</a>
          <a href="#">Manage Users</a>
          <a href="#">Disable Project</a>
        </template>
        <template slot="disabled">
          <a href="#">Enable Project</a>
          <a href="#">Delete Project</a>
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
    identifier: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style scoped>
  .project-container {
    border: 1px solid #d6d5d5;
    border-radius: 0.25rem;
    padding: 1rem;
    margin: 1rem 0;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }

  .disabled.project-container {
    border-color: #eee;
  }

  .label {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .identifier {
    font-size: 0.85rem;
    font-weight: 300;
  }

  .disabled .label,
  .disabled .identifier {
    color: #747474;
  }

  .project-controls {
    width: 14rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-content: center;

  }
</style>
