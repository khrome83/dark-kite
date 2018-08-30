import axios from 'axios';

export const state = () => ({
  features: [],
  // editing: mull,
});

export const mutations = {
  setFeatures (state, data) {
    state.features = data;
    console.log(data);
  },

  setEditing (state, id) {
    console.log(id);
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
