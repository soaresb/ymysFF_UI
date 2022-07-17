<template>
    <div>
        <dropdown :options="opponents" :selected="opponent" v-on:updateOption="onSelectOpponent"></dropdown>
    </div>
    <table class="table table-scroll table-striped">
        <thead>
            <th class="team-matchups-header">Year</th>
            <th class="team-matchups-header">Week</th>
            <th class="team-matchups-header">Team</th>
            <th :class="[teamScoreClass]" v-on:click="this.sortMatchups('team_score')">
                Score
                <li><span class="arrow arrow-bottom"></span></li>
            </th>
            <th class="team-matchups-header" >Opponent</th>
            <th class="team-matchups-header interactive" v-on:click="this.sortMatchups('opponent_team_score')">Opponent Score</th>
        </thead>
        <tbody>
            <team-matchup v-for="matchup in this.matchups" v-bind:key="matchup.id" :matchup="matchup"/>
        </tbody>
    </table>
</template>

<script>

import TeamMatchup from './TeamMatchup.vue';
import dropdown from 'vue-dropdowns';
const _ = require("lodash");

export default {
    name: 'TeamMatchups',
    components: {
      TeamMatchup,
      'dropdown': dropdown,
    },
    props: {
        
    },
    data(){
        return {
            teamId: parseInt(this.$route.params.teamId),
            allMatchups: [],
            matchups: [],
            opponent: {
                name: ""
            },
            opponents: [],
            team_score_sort: null,
            opponent_score_sort: null,
            teamScoreClass: "team-matchups-header interactive"
        }
    },
    mounted() {
        this.fetchMatchups();
        this.fetchOpponents();
    },
    methods: {
        fetchMatchups() {
            let matchupsUrl = `/team/${this.$route.params.teamId}/matchups`;
            return Promise.all([
                this.$ymysApi.get(matchupsUrl),
            ]).then((responses) => {
                const [matchupsResponse] = responses;
                this.matchups = matchupsResponse.data.results.map((matchup) => {
                    if (matchup.away_team && matchup.away_team.id === this.teamId) {
                        return { ...matchup, team: matchup.away_team, opponent: matchup.home_team, team_score: matchup.away_score, opponent_score: matchup.home_score };
                    }
                    return { ...matchup, team: matchup.home_team, opponent: matchup.away_team, opponent_score: matchup.away_score, team_score: matchup.home_score };
                });
                this.allMatchups = _.cloneDeep(this.matchups);
            })
            .catch((error) => {
                console.error(error.response);
            });
        },

        fetchOpponents() {
            return Promise.all([
                this.$ymysApi.get("/teams")
            ]).then((responses) => {
                const [teamsResponse] = responses;
                this.opponents = _.chain(teamsResponse.data.results)
                    .map((team) => {
                        return { ...team, name: team.name };
                    })
                    .filter((team) => team.espn_team_id !== this.teamId)
                    .value();
                    this.opponent = _.head(this.opponents);
                    })
                .catch((error) => {
                    console.error(error.response);
                });
        },

        onSelectOpponent(opponent) {
            this.matchups = _.filter(this.allMatchups, (matchup) => {
                return (matchup.away_team && matchup.away_team.id === opponent.espn_team_id) || (matchup.home_team && matchup.home_team.id === opponent.espn_team_id)
            });
        },

        sortMatchups(sort_type) {
            if (sort_type === "team_score") {
                this.matchups = this.sortMatchupsByScore(this.matchups, "team");
            } else if (sort_type === "opponent_team_score") {
                this.matchups = this.sortMatchupsByScore(this.matchups, "opponent");
            }
        },

        sortMatchupsByScore(matchups, team) {
            if (team === "team") {
                if (_.isNull(this.team_score_sort)) {
                    this.team_score_sort = "desc";
                    this.teamScoreClass = "team-matchups-header interactive-desc"
                    return _.orderBy(matchups, ["team_score"], ["desc"]);
                } else if (this.team_score_sort === "asc") {
                    this.team_score_sort = "desc";
                    return _.orderBy(matchups, ["team_score"], ["desc"]);
                } else {
                    this.team_score_sort = "asc";
                    return _.orderBy(matchups, ["team_score"]);
                }
            } else if (team === "opponent") {
                if (_.isNull(this.opponent_score_sort)) {
                    this.opponent_score_sort = "desc";
                    return _.orderBy(matchups, ["opponent_score"], ["desc"]);
                } else if (this.opponent_score_sort === "asc") {
                    this.opponent_score_sort = "desc";
                    return _.orderBy(matchups, ["opponent_score"], ["desc"]);
                } else {
                    this.opponent_score_sort = "asc";
                    return _.orderBy(matchups, ["opponent_score"]);
                }
            }
        }

    }
    
        
}

</script>

<style lang="scss">

    .team-matchups-header {
        border: 1px solid silver;
        &.interactive {
            cursor:pointer;
            text-decoration:underline;

            &:after {
                content: "";
            }
        }

        &.interactive-desc {
            cursor:pointer;
            text-decoration:underline;

            &:after {
                content: "→";
            }
        }

        .arrow {
            display: inline-block;
            width: 15px;
            height: 15px;
            border-top: 2px solid #000;
            border-right: 2px solid #000;
        }

        .arrow-top {
            transform: rotate(-45deg);
        }

        .arrow-bottom {
            transform: rotate(135deg);
        }
        
    }

</style>