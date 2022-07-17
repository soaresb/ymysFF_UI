<template>
    <dropdown :options="years" :selected="year" v-on:updateOption="onSelectYear"></dropdown>
    <dropdown :options="weeks" :selected="week" v-on:updateOption="onSelectWeek"></dropdown>
    <div class="rankings" style="padding: 20px;">
        <ranking v-for="ranking in this.rankings" v-bind:key="ranking.id" :ranking="ranking" />
    </div>
</template>

<script>
// @ is an alias to /src

import Ranking from "../components/ranking/Ranking.vue";
import dropdown from 'vue-dropdowns';
const _ = require("lodash");

export default {
  name: 'Rankings',
  components: {
      Ranking,
      'dropdown': dropdown
  },
  created() {

  },
  data() {
      return {
        rankings: [],
        year: {
            year: 2021,
            name: 2021
        },
        week: {
            week: 10,
            name: 10
        },
        years: [],
        weeks: []
      }
  },
  mounted() {
    this.fetchRankings(null, null);
    return Promise.all([
      this.$ymysApi.get(`/seasons`)
    ])
      .then((responses) => {
        const [seasonsResponse] = responses;
        this.seasons = seasonsResponse.data.results;
        this.years = seasonsResponse.data.results.seasons.map((season) => {
            return { year: season.year, name: season.year };
        });
        this.weeks = _.last(this.seasons.seasons).ranking_weeks.map((week) => {
            return { week, name: week };
        });
        
      })
      .catch((error) => {
        console.error(error.response);
      });
  },
  methods: {
    fetchRankings(year, week) {
        const params = {};
        let rankingsUrl = `/league/rankings`;
        params.year = year || this.year.year;
        params.week = week || this.week.week
        return Promise.all([
            this.$ymysApi.get(rankingsUrl, { params }),
        ]).then((responses) => {
            const [rankingsResponse] = responses;
            this.rankings = rankingsResponse.data.results;
        })
        .catch((error) => {
            console.error(error.response);
        });
    },

    onSelectYear(payload) {
        const { year }  = payload;
        this.year = {
            year,
            name: year
        };
        this.fetchRankings(year, null);
    },

    onSelectWeek(payload) {
        const { week }  = payload;
        this.week = {
            week,
            name: week
        }
        this.fetchRankings(null, week);
    },
}
}
</script>
