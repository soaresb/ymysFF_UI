<template>
    <table class="table table-scroll table-striped">
        <thead>
            <th>Year</th>
            <th>Week</th>
            <th>NFL Team</th>
            <th>YMYS Team</th>
            <th>Slot</th>
            <th v-if="this.player.position === 'QB'">C / A</th>
            <th v-if="this.player.position === 'QB'">YDS</th>
            <th v-if="this.player.position === 'QB'">TD</th>
            <th v-if="this.player.position === 'QB'">INT</th>
            <th>Points</th>
        </thead>
        <tbody>
            <player-stat v-for="stat in this.playerStats" v-bind:key="stat.id" :stat="stat" :player="this.player"/>
        </tbody>
        
    </table>
</template>

<script>

import PlayerStat from './PlayerStat.vue';

export default {
    name: 'PlayerStats',
    components: {
        PlayerStat
    },
    props: {
        playerStats: [],
        player: {}
    },
    data(){
        return {
            
        }
    },
    mounted() {

    },
    methods: {
    
    }
    
        
}

</script>

<style lang="scss">

    .table-scroll {
        overflow-x:auto;
    }
    
</style>