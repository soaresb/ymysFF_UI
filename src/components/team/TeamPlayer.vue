<template>
    <tr>
        <td>
            {{this.player.slot_position}}
        </td>
        <td class="row">
            <div class="col-sm-4">
                <img v-if="this.player.postition === 'D/ST'" :src="'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/' + this.player.espn_id + '.png&w=350&h=254'" width="50">
                <img :src="'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/' + this.player.espn_id + '.png&w=350&h=254'" width="50">
            </div>
            <div class="col-md-8">
                <a :href="'/player/' + this.player.espn_id">{{this.player.name}}</a>
            </div>
            
        </td>
        <td>
            {{this.player.pro_team}}
        </td>
        <td>
            {{this.player.pro_opponent}}
        </td>
        <td>
            {{this.player.projected_points}}
        </td>
        <td>
            {{this.player.points}}
        </td>
        
    </tr>
</template>

<script>



export default {
    name: 'TeamPlayer',
    components: {
      
    },
    props: {
        player: {}
    },
    data(){
        
    },
    mounted() {

    },
    methods: {
    
    }
    
        
}

</script>

<style lang="scss">

</style>