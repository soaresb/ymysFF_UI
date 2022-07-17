<template>
    <tr>
        <td>
            {{this.stat.year}}
        </td>
        <td>
            {{this.stat.week}}
        </td>
        <td>
            {{this.stat.pro_team}}
        </td>
        <td>
            {{this.stat.team.name}}
        </td>
        <td>
            {{this.stat.slot_position}}
        </td>
        <td v-if="this.player.position === 'QB'">
            {{this.stat.passing_completions}} / {{this.stat.passing_attempts}}
        </td>
        <td v-if="this.player.position === 'QB'">
            {{this.stat.passing_yards}}
        </td>  
        <td v-if="this.player.position === 'QB'">
            {{this.stat.passing_tds}}
        </td>
        <td v-if="this.player.position === 'QB'">
            {{this.stat.passing_interceptions}}
        </td> 
        <td>
            {{this.stat.points}}
        </td>         
    </tr>
</template>

<script>



export default {
    name: 'PlayerStat',
    components: {
      
    },
    props: {
        stat: {},
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