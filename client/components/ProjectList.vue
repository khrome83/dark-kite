<template>
  <div class="list">
    <project-list-item v-for="project in projectList" :key="project" v-bind="projects[project]" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProjectListItem from '~/components/ProjectListItem.vue';

export default {
  components: {
    ProjectListItem,
  },
  computed: {
    ...mapState('projects', ['projects', 'projectList'])
  },
}
</script>

<style scoped>
  .list {
    margin: 1rem 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
