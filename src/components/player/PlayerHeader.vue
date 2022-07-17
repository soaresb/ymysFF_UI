<template>
    <div class="row player-header">
        <div class="col-3">
            <img :src="'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/' + this.player.espn_id + '.png&w=350&h=254'" width="150">
        </div>
        <div class="col align-self-center player-name">
            <h3>{{this.player.name}}</h3>
            <span>{{this.player.position}} - {{this.player.pro_team}}</span> 
        </div>
    </div>
</template>

<script>
// @ is an alias to /src


export default {
    name: 'PlayerHeader',
    components: {

    },
    created() {

    },
    data() {
        return {
            
        }
    },
    props: {
        player: {}
    },
    mounted() {
        
    },
    methods: {
        
    }
}
</script>

<style lang="scss">
    .player-header {
        border: 1px solid;
        border-radius: 10px;
        margin-top: 10px !important;
        margin-bottom: 10px !important;
    }
</style>