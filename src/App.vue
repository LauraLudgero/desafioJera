<template>
  <div id="app">
  </div>
</template>


<script>
export default {
  created(){
    this.$http.get('https://api.themoviedb.org/3/discover/movie?api_key=d918157139c7bf7a666711e1c1826e36&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
      .then(res => res.data.results)
      .then(filme => this.$http.post("https://connectview-82647-default-rtdb.firebaseio.com/filmes.json", filme))

  }
}
</script>

<style>


</style>
