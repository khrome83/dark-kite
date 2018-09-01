<template>
  <div>
    <h1>Features</h1>
    <h2>Subheading</h2>
    <feature-list />
    <div>
      <base-button @click="openOverpanel('Default')">
        Open Default
      </base-button>

      <base-button @click="openOverpanel('Edit')" secondary>
        Open Edit
      </base-button>

      <base-button @click="openOverpanel('Edit')" danger>
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

