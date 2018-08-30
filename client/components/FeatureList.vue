<template>
  <div class="list">
    <feature-list-item v-for="feature in features" :key="feature.id" v-bind="feature" />
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
    ...mapState('features', ['features'])
  },
}
</script>

<style>
  .list {
    border: 1px solid #eee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
