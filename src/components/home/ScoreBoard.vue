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
        
    },
    methods: {
    
    }
    
        
}

</script>

<style lang="scss">
</style>