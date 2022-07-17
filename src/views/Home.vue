<template>
  <div class="home">
    <div class="row">
        <div class="col-12 col-md-3 border">
          <score-board :matchups="this.matchups" />
        </div>
        <div class="col-12 col-md-6 border">
          <img alt="Vue logo" src="../assets/logo.png">
          <home-rankings />
        </div>
        <div class="col-12 col-md-3 border">
          <home-standings :standings="this.standings"/>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeRankings from '../components/home/HomeRankings.vue';
import ScoreBoard from '../components/home/ScoreBoard.vue';
import HomeStandings from '../components/home/HomeStandings.vue';


export default {
  name: 'Home',
  components: {
      HomeRankings,
      ScoreBoard,
      HomeStandings
  },
  created() {

  },
  data() {
      return {
          standings: [],
          matchups: [],
          seasons: [],
      }
  },
  mounted() {
    return Promise.all([
      this.$ymysApi.get("/league/division/standings"),
      this.$ymysApi.get("/league/matchups"),
      this.$ymysApi.get(`/seasons`)
    ])
    .then((responses) => {
      const [standingsResponse, matchupResponse, seasonsResponse] = responses;
      this.matchups = matchupResponse.data.results;
      this.standings = standingsResponse.data.results;
      this.seasons = seasonsResponse.data.results.seasons;
    })
    .catch((error) => {
      console.error(error.response);
    });
  }
}
</script>
