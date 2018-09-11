<template>
  <div :class="{ disabled }">
    <div>{{id}}</div>
    <div>{{label}}</div>
    <div>{{identifier}}</div>
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

</style>
