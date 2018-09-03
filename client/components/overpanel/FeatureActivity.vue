<template>
  <div>
    <h3>Feature Activity</h3>
    <div>{{editing}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FeatureActivity',
  computed: {
    ...mapState('features', ['editing']),
  },
}
</script>
