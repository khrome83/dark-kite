import axios from 'axios';

export const state = () => ({
  features: [],
  editing: null,
});

export const mutations = {
  setFeatures (state, data) {
    state.features = data;
  },

  setEditing (state, id) {
    state.editing = id;
  }
};

export const actions = {
  // TODO: only requet if features for project ID are not known
  async getFeatures ({ commit }) {
    const { data } = await axios.get('/data/features.json')
    commit('setFeatures', data)
  },
}
