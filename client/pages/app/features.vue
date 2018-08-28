<template>
  <div>
    <h1>Features</h1>
    <h2>Subheading</h2>
    <feature-list />
    <div>
      <base-button @click.prevent.native="$store.commit('toggle')">Testing</base-button>
      <base-button to="https://insiderx.com" secondary>Testing</base-button>
      <button @click="openOverpanel('Default')">
        Open Default
      </button>

      <button @click="openOverpanel('Edit')">
        Open Edit
      </button>
    </div>
  </div>
</template>

<script>
import FeatureList from '~/components/FeatureList.vue';
import BaseButton from '~/components/BaseButton.vue';
import { mapMutations } from 'vuex';

export default {
  layout: 'app',
  components: {
    FeatureList,
    BaseButton,
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

