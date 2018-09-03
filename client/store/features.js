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
};

export const actions = {
  // TODO: only requet if features for project ID are not known
  async fetchFeatures ({ commit }) {
    const { data } = await axios.get('/data/features.json')

    const features = {};
    const featureList = [];

    data.forEach((feature) => {
      features[feature.id] = feature;
      featureList.push(feature.id);
    });

    commit('setFeatures', { features, featureList });
  },
}
