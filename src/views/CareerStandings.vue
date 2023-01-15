<template>
    <div class="career-standings" style="padding: 20px;">
        <career-standing v-for="standing in this.careerStandings" v-bind:key="standing.id" :standing="standing" />
    </div>
</template>

<script>
// @ is an alias to /src

import CareerStanding from "../components/career_standings/CareerStanding.vue";

export default {
  name: 'CareerStandings',
  components: {
      CareerStanding
  },
  created() {

  },
  data() {
      return {
        careerStandings: []
      }
  },
  mounted() {
    this.fetchCareerStandings();
  },
  methods: {
    fetchCareerStandings() {
        let careerStandingsUrl = `/league/career-standings`;
        return Promise.all([
            this.$ymysApi.get(careerStandingsUrl),
        ]).then((responses) => {
            const [careerStandingsResponse] = responses;
            const careerStandings = careerStandingsResponse.data.results;
            this.careerStandings = careerStandings;
        })
        .catch((error) => {
            console.error(error.response);
        });
    },
}
}
</script>
