<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <img src="http://placehold.it/1068x400" alt="card image" class="card-img">
          <div class="card-img-overplay">
            <h1 class="card-title text-left">{{film.title}}</h1>
            <p class="card-text text-left">{{film.description}}</p>
          </div>
          <h3>в ролях </h3>
          <div class="card-body">
            <div class="row">
              <div class="col-3" v-for="actor in film.actors" :key="actor.id">
                <router-link :to="'/actors/${actor.id}/${actor.name}'" class="card">
                  <img src="http://placehold.it/150x100" alt="" class="card-img-top">
                  <div class="card-img-overplay">
                    <p class="card-title">{{actor.name}}</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      id: this.$route.params.id,
      film: {}
    }
  },
  created () {
    axios.get('http://localhost:8080/static/film.json')
      .then(response => {
        this.film = response.data
      })
  }
}
</script>

<style>

</style>
