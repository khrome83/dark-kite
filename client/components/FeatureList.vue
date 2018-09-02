<template>
  <div class="list">
    <feature-list-item v-for="feature in featureList" :key="feature" v-bind="features[feature]" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FeatureListItem from '~/components/FeatureListItem.vue';

export default {
  components: {
    FeatureListItem,
  },
  computed: {
    ...mapState('features', ['features', 'featureList'])
  },
}
</script>

<style>
  .list {
    margin: 1rem 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
