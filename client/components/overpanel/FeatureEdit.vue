<template>
  <form id="editFeature" name="Edit Feature" action="" method="post">
    <fieldset>
      <div>
        <label for="label">Label</label>
        <input type="text" name="label" id="label" v-model="newLabel" required>
      </div>
      <div>
        <label for="accessKey">Access Key</label>
        <input type="text" name="accessKey" id="accessKey" pattern="^[a-z]{1}[A-Za-z0-9]{1,}$" v-model="newAccessKey" required>
      </div>
    </fieldset>
    <div class="form-control">
      <base-button @click="closeOverpanel" danger>Cancel</base-button>
      <base-button @click="submitForm">Update</base-button>
    </div>
  </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import BaseButton from '~/components/BaseButton';

export default {
  name: 'FeatureEdit',
  components: {
    BaseButton,
  },
  computed: {
    ...mapState('features', ['features', 'editing']),
    label: (state) => state.features[state.editing].label,
    accessKey: (state) => state.features[state.editing].accessKey,
  },
  data () {
    return {
      newLabel: null,
      newAccessKey: null,
    };
  },
  created () {
    this.newLabel = this.label;
    this.newAccessKey = this.accessKey;
  },
  methods: {
    ...mapMutations('features', ['updateFeature']),
    ...mapMutations('overpanel', ['closeOverpanel']),
    submitForm () {
      this.updateFeature({
        id: this.editing,
        label: this.newLabel,
        accessKey: this.newAccessKey
      });
      this.closeOverpanel();
    },
  },
}
</script>

<style scoped>
.form-control {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

