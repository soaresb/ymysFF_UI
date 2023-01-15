<template>
    <div class="container">
        <div class="row">
            <team-header :team="this.team"/>
        </div>
        <nav>
            <div class="nav nav-tabs justify-content-end" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-roster-tab" data-bs-toggle="tab" data-bs-target="#nav-roster" type="button" role="tab" aria-controls="nav-roster" aria-selected="true">Roster</button>
                <button class="nav-link" id="nav-matchups-tab" data-bs-toggle="tab" data-bs-target="#nav-matchups" type="button" role="tab" aria-controls="nav-matchups" aria-selected="false">Matchups</button>
                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-roster" role="tabpanel" aria-labelledby="nav-roster-tab">
                <dropdown :options="years" :selected="year" v-on:updateOption="onSelectYear"></dropdown>
                <dropdown :options="weeks" :selected="week" v-on:updateOption="onSelectWeek"></dropdown>
                <div class="row" style="border: 1px solid; border-radius: 10px;">
                    <div class="col-12">
                        <team-players v-if="this.roster" :players="this.roster"/>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-matchups" role="tabpanel" aria-labelledby="nav-matchups-tab">
                <div class="row">
                    <div class="col-12">
                        <team-matchups />
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <div class="row">
                    <div class="col-12">
                        <team-draft-history v-if="this.teamDraftHistory" :draftHistory="this.teamDraftHistory"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
// @ is an alias to /src

import TeamPlayers from '../components/team/TeamPlayers.vue';
import TeamHeader from '../components/team/TeamHeader.vue';
import TeamMatchups from '../components/team/TeamMatchups.vue';
import TeamDraftHistory from '../components/team/TeamDraftHistory.vue';
import dropdown from 'vue-dropdowns';
const _ = require("lodash")


export default {
  name: 'Team',
  components: {
      TeamPlayers,
      TeamHeader,
      TeamMatchups,
      TeamDraftHistory,
      'dropdown': dropdown,
  },
  created() {

  },
  data() {
      return {
          roster: [],
          seasons: [],
          team: {},
          matchups: [],
          year: {
            year: 2022,
            name: 2022
          },
          week: {
            week: 17,
            name: 17
          },
          weeks: [],
          years: [],
          teamDraftHistory: null
      }
  },
  mounted() {
      this.fetchRoster(null, null);
      return Promise.all([
      this.$ymysApi.get(`/team/${this.$route.params.teamId}`, ),
      this.$ymysApi.get(`/seasons`),
      this.$ymysApi.get(`/team/${this.$route.params.teamId}/draftpicks?details=true`, { details: true })
    ])
      .then((responses) => {
        const [teamResponse, seasonsResponse, teamDraftHistory] = responses;
        this.team = teamResponse.data.results;
        this.seasons = seasonsResponse.data.results;
        this.years = seasonsResponse.data.results.seasons.map((season) => {
          return { year: season.year, name: season.year };
        });
        this.weeks = _.last(this.seasons.seasons).weeks.map((week) => {
          return { week, name: week };
        });
        this.teamDraftHistory = teamDraftHistory.data.results;
        
      })
      .catch((error) => {
        console.error(error.response);
      });
    
  },
  methods: {
    fetchRoster(year, week) {
        const params = {};
        let rosterUrl = `/team/${this.$route.params.teamId}/roster`;
        params.year = year || this.year.year;
        params.week = week || this.week.week
        return Promise.all([
            this.$ymysApi.get(rosterUrl, { params }),
        ]).then((responses) => {
            const [rosterResponse] = responses;
            this.roster = rosterResponse.data.results;
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
        this.fetchRoster(year, null);
    },

    onSelectWeek(payload) {
        const { week }  = payload;
        this.week = {
            week,
            name: week
        }
        this.fetchRoster(null, week);
    },
  }
}
</script>
