export const state = () => ({
  overpanelVisible: false,
  overpanelComponent: null,
});

export const mutations = {
  closeOverpanel (state) {
    state.overpanelVisible = false;
  },
  openOverpanel (state, componentName) {
    state.overpanelVisible = true;
    state.overpanelComponent = componentName;
  }
};
