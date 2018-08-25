export const state = () => ({
  open: true,
})

export const mutations = {
  toggle (state) {
    state.open = !state.open;
  },
  close (state) {
    state.open = false;
  }
}
