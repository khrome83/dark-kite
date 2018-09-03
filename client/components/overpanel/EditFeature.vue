<template>
  <form>
    <fieldset>
      <div>
        <label for="label">Label</label>
        <input type="text" name="label" id="label" v-model="label">
      </div>
      <div>
        <label for="accessKey">Access Key</label>
        <input type="text" name="accessKey" id="accessKey" v-model="accessKey">
      </div>
    </fieldset>
  </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'EditFeature',
  computed: {
    ...mapState('features', ['features', 'editing']),
    label: {
      get () {
        return this.features[this.editing].label;
      },
      set (value) {
        this.updateLabel({ id: this.editing, value });
      }
    },
    accessKey: {
      get () {
        return this.features[this.editing].accessKey;
      },
      set (value) {
        this.updateAccessKey({ id: this.editing, value });
      }
    },
  },
  data () {
    return {
      oldLabel: `${this.label}`,
      oldAccessKey: `${this.accessKey}`,
    };
  },
  methods: {
    ...mapMutations('features', ['updateLabel', 'updateAccessKey']),
    ...mapMutations('overpanel', ['closeOverpanel']),
    resetForm () {
      this.label = this.oldLabel;
      this.accessKey = this.oldAccessKey;
    },
    closeForm () {
      this.closeOverpanel();
    }
  },
}
</script>

<style scoped>

</style>

