import Vue from 'vue'
import Router from 'vue-router'
import FilmsList from '@/components/FilmsList'
import FilmsNew from '@/components/FilmsNew'
import Film from '@/components/Film'
import ActorsList from '@/components/ActorsList'
import Actor from '@/components/Actor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FilmsList',
      component: FilmsList
    }, {
      path: '/new',
      name: 'FilmsNew',
      component: FilmsNew
    }, {
      path: '/films/:id',
      name: 'Film',
      component: Film
    }, {
      path: '/actors',
      name: 'ActorsList',
      component: ActorsList
    }, {
      path: '/actors/:name/:id',
      name: 'Actor',
      component: Actor
    }
  ],
  linkExactActiveClass: 'active'
})
