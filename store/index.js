import axios from "~/plugins/axios"

// Defines the default state (items)
export const state = () => ({
  items: []
})

// Here are my mutations functions,
// they are supposed to handle actions
export const mutations = {
  setItems(state, items) {
    state.items = items
  }
}

// Here are my actions which are gonna
// be executed on server start.
// notice the commit, it will trigger the mutation function.
export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await axios.get("topstories.json")
    const ids = response.data
    const tenIds = ids.slice(0, 10)

    const itemsPromises = tenIds.map(id => axios.get(`item/${id}.json`))
    const itemsResponses = await Promise.all(itemsPromises)
    const items = itemsResponses.map(res => res.data)

    commit("setItems", items)
  }
}