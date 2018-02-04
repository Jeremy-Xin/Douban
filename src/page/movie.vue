<template>
  <div>
      <Header></Header>
      <div>
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.summary }}</p>
      </div>
      <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
export default {
  components: { Header, Footer },
  data() {
    return {
      movie: {}
    };
  },
  created() {
    this.$api.get("/movie/subject/" + this.$route.params.id, null, data => {
      console.log(data)
      this.movie = data
    });
  }
}
</script>
