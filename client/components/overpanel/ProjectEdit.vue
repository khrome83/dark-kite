<template>
  <form id="editProject" name="Edit Project" action="" method="post">
    <fieldset>
      <div>
        <label for="label">Label</label>
        <input type="text" name="label" id="label" v-model="newLabel" required>
      </div>
      <div>
        <label for="description">Description</label>
        <textarea type="text" name="description" id="description" v-model="newDescription" required />
      </div>
    </fieldset>
    <div class="form-control">
      <base-button @click.native="closeOverpanel" danger>Cancel</base-button>
      <base-button @click.native="submitForm">Update</base-button>
    </div>
  </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import BaseButton from '~/components/BaseButton';

export default {
  name: 'ProjectEdit',
  components: {
    BaseButton,
  },
  computed: {
    ...mapState('projects', ['projects', 'editing']),
    label: (state) => state.projects[state.editing].label,
    description: (state) => state.projects[state.editing].description,
  },
  data () {
    return {
      newLabel: null,
      newDescription: null,
    };
  },
  created () {
    this.newLabel = this.label;
    this.newDescription = this.description;
  },
  methods: {
    ...mapMutations('projects', ['updateProject']),
    ...mapMutations('overpanel', ['closeOverpanel']),
    submitForm () {
      this.updateFeature({
        id: this.editing,
        label: this.newLabel,
        description: this.newDescription
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

