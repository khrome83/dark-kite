<template>
  <div>
    Edit This is Editing
      <button @click="openOverpanel('Default')">
        Open Default
      </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Edit',
  data() {
    return { title: 'testing' }
  },
  methods: {
    ...mapMutations({
      openOverpanel: 'overpanel/openOverpanel',
    }),
  },
}
</script>
