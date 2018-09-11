<template>
  <div class="project-container" :class="{ disabled }">
    <div class="desc">
      <div class="label">{{label}}</div>
      <div class="identifier">({{identifier}})</div>
    </div>
    <div>{{description}}</div>
    <div>{{disabled}}</div>
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
</style>
