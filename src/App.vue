<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <app-title :title="title"></app-title>

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!--<a class="navbar-brand" href="#">Navbar</a>-->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <router-link class="nav-item nav-link" to="/">Фильмы</router-link>
                <router-link class="nav-item nav-link" to="/new">Новинки</router-link>
                <router-link class="nav-item nav-link" to="/actors">Актеры</router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import AppTitle from './components/AppTitle'

export default {
  name: 'App',
  data () {
    return {title: 'filmoteks'}
  },
  components: {AppTitle}
}
</script>

<style lang="scss" src="./styles/styles.scss"></style>
