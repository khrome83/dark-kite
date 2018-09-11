import Vue from 'vue';
import axios from 'axios';

export const state = () => ({
  projects: {},
  projectList: [],
  selected: null,
});

export const mutations = {
  setProjects (state, data) {
    state.projects = data.projects;
    state.projectList = data.projectList;
  },

  setSelected(state, id) {
    state.selected = id;
  },

  setSelectedIfEmpty(state, id) {
    if (state.selected === null || state.projects[id] === undefined) {
      state.selected = id;
    }
  },

  toggleDisabled (state, id) {
    state.projects[id].disabled = !state.projects[id].disabled;
  },

  updateLabel (state, { id, value }) {
    state.projects[id].label = value;
  },

  updateDescription(state, { id, value }) {
    state.projects[id].description = value;
  },

  updateProject (state, { id, label, description, keyFormat = 'toCamelCase' }) {
    state.projects[id].label = label;
    state.projects[id].description = description;
    state.projects[id].keyFormat = keyFormat;
  },

  createProject (state, { id, label, description, keyFormat = 'toCamelCase' }) {
    const newProject = {
      id,
      label,
      description,
      keyFormat,
      disabled: false,
    };

    state.projectList = [...state.projectList, id];
    Vue.set(state.projects, id, newProject);
  },

  deleteProject (state, id) {
    state.projectList = state.projectList.filter(e => e !== id);
  },
};

export const actions = {
  async fetchProjects ({ commit }) {
    const { data } = await axios.get('/data/projects.json')

    const projects = {};
    const projectList = [];

    data.forEach((project) => {
      projects[project.id] = project;
      projectList.push(project.id);
    });

    const id = projectList[0];

    // Set Project Definitions
    commit('setProjects', { projects, projectList });

    // Make first project selected
    commit('setSelectedIfEmpty', id);

    return projects[id].identifier;
  },
}
