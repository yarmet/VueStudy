import Vue from 'vue'
import Router from 'vue-router'
import FilmsList from '@/components/FilmsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Films',
      component: FilmsList
    }
  ]
})
