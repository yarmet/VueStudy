<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <img src="http://placehold.it/1068x400" alt="" class="card-img">
          <div class="card-img-overplay">
            <h1 class="card-title text-left">{{actor.name}}</h1>
          </div>
          <h3>фильмы</h3>
          <div class="card-body">
            <div class="row">
              <div class="col-3" v-for="film in actor.films" :key="film.id">
                <router-link :to="'/films/${film.id}'" class="card">
                  <img src="http://placehold.it/150x100" alt="" class="card-img-top">
                  <div class="card-img-overplay">
                    <p class="card-title">{{film.title}}</p>
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
      actor: {}
    }
  },
  created () {
    axios.get('http://localhost:8080/static/actor.json')
      .then(response => {
        this.actor = response.data
      })
  }

}
</script>

<style scoped>

</style>
