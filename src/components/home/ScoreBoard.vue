<template>
    <div>
        <div v-for="matchup in matchups" v-bind:key="matchup.id">
            <score-board-game v-bind:matchup="matchup"/>
        </div>
    </div>
</template>

<script>

import ScoreBoardGame from './ScoreBoardGame.vue';

export default {
    name: 'ScoreBoard',
    components: {
      ScoreBoardGame
    },
    props: {
        matchups: []
    },
    data(){
        return {
            games: []
        }
    },
    mounted() {
        // todo implement api
        this.games = [
            {"homeTeam": "Team Never Lucky", "homeTeamScore": 140.8, "awayTeam": "LBSC", "awayTeamScore": 105.74},
            {"homeTeam": "Team Never Lucky", "homeTeamScore": 140.8, "awayTeam": "LBSC", "awayTeamScore": 105.74},
            {"homeTeam": "Team Never Lucky", "homeTeamScore": 140.8, "awayTeam": "LBSC", "awayTeamScore": 105.74},
            {"homeTeam": "Team Never Lucky", "homeTeamScore": 140.8, "awayTeam": "LBSC", "awayTeamScore": 105.74},
            {"homeTeam": "Team Never Lucky", "homeTeamScore": 140.8, "awayTeam": "LBSC", "awayTeamScore": 105.74},
            {"homeTeam": "Team Never Lucky", "homeTeamScore": 140.8, "awayTeam": "LBSC", "awayTeamScore": 105.74}
        ]
    },
    methods: {
    
    }
    
        
}

</script>

<style lang="scss">
</style>