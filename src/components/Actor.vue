<template>
    <p>Actor  {{id}}  {{name}}</p>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name
    }
  }

}
</script>

<style scoped>

</style>
