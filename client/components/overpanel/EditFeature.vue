<template>
  <div>
    Currently editing... ({{editing}})<br />
      <button @click="openOverpanel('Default')">
        Open Default
      </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'EditFeature',
  computed: {
    ...mapState('features', ['features', 'editing'])
  },
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
