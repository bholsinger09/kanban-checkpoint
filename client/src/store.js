import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let auth = Axios.create({
  baseURL: base + "auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    boards: [],
    lists: [],
    tasks: [],
    activeUser: {},
    activeList: [],
    activeTask: [],
    activeBoard: {}
  },

  mutations: {
    setUser(state, activeUser) {
      state.activeUser = activeUser
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setLists(state, data) {
      state.lists = data
    },
  },
  actions: {
    //#region -- AUTH STUFF --
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
        .catch(res => {
          router.push({ name: 'login' })
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
          console.log('getBoards', res)
        })
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    deleteBoard({ commit, dispatch }, boardId) {
      api.delete('boards/' + boardId)
        .then(res => {
          dispatch('getBoards')
        })
    },
    //#endregion --Boards
    //#region -- Lists
    async getLists({ commit, dispatch }, payload) { // I made this
      let res = await api.get('/boards/' + payload.boardId + '/lists/' + payload._id)
      commit('setLists', res.data.results)
      console.log('getLists', res.data)
    }, //getTasks

    //endregion --Lists
    //#region -- TASKS
    async getTasks({ commit, dispatch }, payload) { // I made this
      let res = await api.get('/boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks')
      // commit('setTasks', res.data) do we need this
      console.log('getTasks', res.data)
    }, //getTasks

    async createComment({ commit, dispatch }, payload) { //I made this
      let res = await api.put('/boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload.id)
      dispatch('getTasks', payload._id)
      // commit('setTasks', res.data) do we need this
      console.log('createComment', res.data)
    }, //createComments

    //#enfregion -- Tasks
  }
})
