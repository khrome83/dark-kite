<template>
  <div>
    <h1>Projects</h1>
    <h2>Subheading</h2>
    <project-list />
    <div class="toolbar">
      <base-button over-panel="ProjectCreate">
        Create Project
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/BaseButton.vue';
import ProjectList from '~/components/ProjectList.vue';

export default {
  layout: 'app',
  components: {
    BaseButton,
    ProjectList,
  },
  async fetch ({ store, params }) {
    await store.dispatch('projects/fetchProjects');
  },
}
</script>

<style>
  .links {
    padding-top: 15px;
  }

  .toolbar {
    display: flex;
    flex-direction: row-reverse;
}
</style>

