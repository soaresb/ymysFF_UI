<template>
    <div>
        <table class="table table-scroll table-striped">
        <thead>
            <th>Slot</th>
            <th>Player</th>
            <th>Team</th>
            <th>Opp</th>
            <th>Proj</th>
            <th>Points</th>
        </thead>
        <tbody>
            <team-player v-for="player in this.players" v-bind:key="player.id" :player="player"/>
        </tbody> 
    </table>
    
    </div>
</template>

<script>

import TeamPlayer from './TeamPlayer.vue';

export default {
    name: 'TeamPlayers',
    components: {
      TeamPlayer,
    },
    props: {
        players: []
    },
    data(){
        return {
            weeks: [{name: 1},{name: 2},{name: 3}],
            week: {name: 1}
        }
    },
    mounted() {

    },
    methods: {
        methodToRunOnSelect(payload) {
            this.week = payload;
          }
    
    }
    
        
}

</script>

<style lang="scss">

    .TeamPlayersHeader {
        font-weight: bold;
    }
</style>