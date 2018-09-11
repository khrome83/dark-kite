<template>
  <div class="project-container" :class="{ disabled }">
    <div class="desc">
      <div class="label">{{label}}</div>
      <div class="identifier">({{identifier}})</div>
    </div>
    <div class="project-controls">
      <div class="project-selected" v-if="selected === id">Selected</div>
      <toolbar-menu :disabled="disabled">
        <template slot="active">
          <template v-if="selected !== id">
            <a href="#" @click="setSelected(id)">Select Project</a>
          </template>
          <a href="#">Edit Project</a>
          <a href="#">Manage Users</a>
          <a href="#" @click="toggleDisabled(id)">Disable Project</a>
        </template>
        <template slot="disabled">
          <a href="#" @click="toggleDisabled(id)">Enable Project</a>
          <a href="#" @click="deleteProject(id)">Delete Project</a>
        </template>
      </toolbar-menu>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
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
  },
  computed: {
    ...mapState('projects', ['selected']),
  },
  methods: {
    ...mapMutations('projects', ['setSelected', 'toggleDisabled', 'deleteProject']),
    ...mapMutations('overpanel', ['openOverpanel']),
  },
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
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
  }

  .project-selected {
    font-weight: 300;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
</style>
