import Vue from 'vue'
import Router from 'vue-router'
import Boards from './views/Boards.vue'
import Board from './views/Board.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // TODO: Add a landing page route
    // FIXME: There is no about page yet you have links that 
    //  -- FIXME: are pointing to the about page in app.vue
    {
      path: '/',
      name: 'boards',
      component: Boards
    },
    {
      path: '/board/:boardId',
      name: 'board',
      props: true,
      //TODO: add a route guard
      component: Board
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})