import Vue from 'vue';
import axios from 'axios';

export const state = () => ({
  features: {},
  featureList: [],
  editing: null,
});

export const mutations = {
  setFeatures (state, data) {
    state.features = data.features;
    state.featureList = data.featureList;
  },

  setEditing (state, id) {
    state.editing = id;
  },

  toggleFeature (state, id) {
    if (!state.features[id].disabled) {
      state.features[id].enabled = !state.features[id].enabled;
    }
  },

  toggleDisabled (state, id) {
    state.features[id].disabled = !state.features[id].disabled;
  },

  updateLabel (state, { id, value }) {
    state.features[id].label = value;
  },

  updateAccessKey (state, { id, value }) {
    state.features[id].accessKey = value;
  },

  updateFeature (state, { id, label, accessKey }) {
    state.features[id].label = label;
    state.features[id].accessKey = accessKey;
  },

  createFeature (state, { id, label, accessKey }) {
    const newFeature = {
      id,
      label,
      accessKey,
      enabled: false,
      disabled: false,
    };

    state.featureList = [...state.featureList, id];
    Vue.set(state.features, id, newFeature);
  },

  deleteFeature (state, id) {
    state.featureList = state.featureList.filter(e => e !== id);
  },
};

export const actions = {
  // TODO: only requet if features for project ID are not known
  async fetchFeatures ({ rootState, commit, dispatch }) {

    let id;
    if (rootState.projects.selected) {
      id = rootState.projects.projects[rootState.projects.selected].identifier;
    } else {
      id = await dispatch('projects/fetchProjects', {}, { root: true });
    }

    if (!id) {
      return;
    }

    const { data } = await axios.get(`/data/features/${id}.json`)

    const features = {};
    const featureList = [];

    data.forEach((feature) => {
      features[feature.id] = feature;
      featureList.push(feature.id);
    });

    commit('setFeatures', { features, featureList });
  },
}
