<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-title :title="title"></app-title>
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
