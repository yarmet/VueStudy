<template>
  <div class="container">

    <div class="row">
      <div class="col">
        <film-filter v-model="search" :tags="tags" @tag="onTagUnFilterClicked"></film-filter>
      </div>
    </div>

    <div class="row">
      <div class="col-3 card-container" v-bind:key="film.id" v-for="film in filtered.slice(0, limit)">
        <film-card :item="film" @tag="onTagFilterClicked"></film-card>
      </div>
    </div>

    <div class="row" v-if="limit < filtered.length">
      <div class="col text-center">
        <button class="btn btn-primary" v-on:click="limit+=8">загрузить</button>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p class="text-center" v-if="filtered.length === 0"> по вашему запросу ничего не найдено</p>
      </div>
    </div>
  </div>
</template>

<script>
import FilmFilter from './FilmFilter'
import FilmCard from './FilmCard'
import axios from 'axios'

export default {
  name: 'FilmsList',
  components: {FilmCard, FilmFilter},

  created () {
    axios.get('http://localhost:8080/static/films.json')
      .then(response => {
        this.films = response.data
      }).catch(e => {
        console.log(e)
      })
  },

  data () {
    return {
      title: 'Фильмотека',
      search: '',
      films: [

      ],
      tags: [],
      limit: 8
    }
  },
  methods: {
    onTagFilterClicked (value) {
      if (!this.tags.includes(value)) {
        this.tags.push(value)
      }
    },
    onTagUnFilterClicked (value) {
      if (this.tags.includes(value)) {
        this.tags.splice(this.tags.indexOf(value), 1)
      }
    }

  },
  computed: {
    filtered () {
      var filter = this.search.toLowerCase().trim()
      var result = []

      if (filter === '') {
        result = this.films
      } else {
        result = this.films.filter(film => {
          if (film.title.toLowerCase().indexOf(filter) === 0) {
            return true
          }
        })
      }

      if (this.tags.length > 0) {
        return result.filter(item =>
          this.tags.every(tag =>
            item.tags.includes(tag)
          )
        )
      }
      return result
    }
  },
  comments: {
    FilmFilter, FilmCard
  }
}
</script>

<style scoped>

</style>
