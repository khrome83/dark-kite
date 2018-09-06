<template>
  <form id="createFeature" name="Create Feature" action="" method="post">
    <fieldset>
      <div>
        <label for="label">Label</label>
        <input type="text" name="label" id="label" v-model="label" required>
      </div>
      <div>
        <label for="accessKey">Access Key</label>
        <input type="text" name="accessKey" id="accessKey" pattern="^[a-z]{1}[A-Za-z0-9]{1,}$" v-model="accessKey" required disabled>
      </div>
    </fieldset>
    <div class="form-control">
      <base-button @click.native="closeOverpanel" danger>Cancel</base-button>
      <base-button @click.native="submitForm">Create</base-button>
    </div>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
import uuidv4 from 'uuid/v4';
import BaseButton from '~/components/BaseButton';
import { toCamelCase } from '~/utils/case';

export default {
  name: 'FeatureCreate',
  components: {
    BaseButton,
  },
  data () {
    return {
      label: null,
    };
  },
  computed: {
    accessKey () {
      return this.label ? toCamelCase(this.label) : null;
    },
  },
  methods: {
    ...mapMutations('features', ['createFeature']),
    ...mapMutations('overpanel', ['closeOverpanel']),
    submitForm () {
      this.createFeature({
        id: uuidv4(),
        label: this.label,
        accessKey: this.accessKey
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

