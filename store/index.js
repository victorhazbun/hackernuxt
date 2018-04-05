import axios from "~/plugins/axios"

// Defines the default state (users)
export const state = () => ({
  users: [{id: 0, login: "victor"}]
})

// Here are my mutations functions,
// they are supposed to handle actions
export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

// Here are my actions which are gonna
// be executed on server start.
// notice the commit, it will trigger the mutation function.
export const actions = {
  async nuxtServerInit({commit}) {
    const response = await axios.get("users")
    const users = response.data

    commit("setUsers", users)
  }
}