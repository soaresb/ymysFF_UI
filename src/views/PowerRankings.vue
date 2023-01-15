<template>
    <dropdown :options="years" :selected="year" v-on:updateOption="onSelectYear"></dropdown>
    <dropdown :options="weeks" :selected="week" v-on:updateOption="onSelectWeek"></dropdown>
    <div class="container-sm power-rankings">
        <div v-html="this.powerRanking.body" class="ql-editor">
        
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

import dropdown from 'vue-dropdowns';
const _ = require("lodash");

export default {
  name: 'PowerRankings',
  components: {
      'dropdown': dropdown
  },
  created() {

  },
  data() {
      return {
        powerRanking: {},
        powerRankings: [],
        year: {
            year: 2021,
            name: 2021
        },
        week: {
            week: 1,
            name: 1
        },
        years: [],
        weeks: []
      }
  },
    mounted() {
        this.fetchPowerRankings(null, null);
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
        fetchPowerRankings(year, week) {
            const params = {};
            let powerRankingsUrl = `/league/power-ranking`;
            params.year = year || this.year.year;
            params.week = week || this.week.week
            return Promise.all([
                this.$ymysApi.get(powerRankingsUrl, { params }),
            ]).then((responses) => {
                const [powerRankingsResponse] = responses;
                this.powerRanking = powerRankingsResponse.data.results;
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
            this.fetchPowerRankings(year, null);
        },

        onSelectWeek(payload) {
            const { week }  = payload;
            this.week = {
                week,
                name: week
            }
            this.fetchPowerRankings(null, week);
        },

        fetchPowerRankingYears() {
            return Promise.all([
                this.$ymysApi.get(`/league/power-rankings`),
            ]).then((responses) => {
                const [powerRankingsResponse] = responses;
                this.powerRankings = _.groupBy(powerRankingsResponse.data.results, "year");
            })
            .catch((error) => {
                console.error(error.response);
            });
        },
    }
}
</script>

<style lang="scss">
    
    .power-rankings {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    
</style>
