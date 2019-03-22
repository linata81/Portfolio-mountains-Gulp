const skills = {
  namespaced: true,
  state: {
    data: []
  },
  actions: {
    fetch() {
      this.$axios.get('/skills/1').then(response => {
        console.log(response);
      })
    }
  }
}
export default skills;