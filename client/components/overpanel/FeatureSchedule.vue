<template>
  <div>
    <h3>Feature Schedule</h3>
    <div>{{editing}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FeatureSchedule',
  computed: {
    ...mapState('features', ['editing']),
  },
}
</script>
