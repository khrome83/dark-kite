<template>
  <div>
    <h3>Feature Webhooks</h3>
    <div>{{editing}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FeatureWebhook',
  computed: {
    ...mapState('features', ['editing']),
  },
}
</script>
