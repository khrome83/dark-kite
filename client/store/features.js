import axios from 'axios';

export const state = () => ({
  features: [],
});

export const mutations = {
  setFeatures (state, data) {
    state.features = data;
    console.log(data);
  },
};

export const actions = {
  async getFeatures ({ commit }) {
    const { data } = await axios.get('/data/features.json')
    commit('setFeatures', data)
  },
}
