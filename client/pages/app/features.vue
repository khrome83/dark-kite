<template>
  <div>
    <h1>Features</h1>
    <h2>Subheading</h2>
    <feature-list />
    <div>
      <base-button over-panel="Default">
        Open Default
      </base-button>

      <base-button over-panel="Edit" secondary>
        Open Edit
      </base-button>

      <base-button danger>
        Danger
      </base-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import FeatureList from '~/components/FeatureList.vue';
import BaseButton from '~/components/BaseButton.vue';

export default {
  layout: 'app',
  components: {
    FeatureList,
    BaseButton,
  },
  async fetch ({ store, params }) {
    await store.dispatch('features/fetchFeatures');
  },
  methods: {
    ...mapMutations({
      openOverpanel: 'overpanel/openOverpanel',
    }),
  },
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>

