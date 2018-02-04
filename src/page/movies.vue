<template>
  <div>
    <Header></Header>
    <div class="movie_list">
      <ul>
        <li v-for="m in movies">
          <time v-text="m.year"></time>
          <router-link :to="'/movie/' + m.id">
            {{ m.title }}
          </router-link>
        </li>
      </ul>
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
      movies: []
    };
  },
  created() {
    this.$api.get("movie/in_theaters?count=40", null, data => {
      console.log(data.total + " movies in total.");
      this.movies = data.subjects;
    });
  }
};
</script>
