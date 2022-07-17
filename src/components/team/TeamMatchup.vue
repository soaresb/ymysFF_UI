<template>
    <tr :class="this.matchup.winner === this.$route.params.teamId ? 'winner' : 'loser'">
         <td>
            {{this.matchup.year}}
        </td>
        <td>
            {{this.matchup.week}}
        </td>
        <td v-if="this.matchup.team">
            {{this.matchup.team.name}}
        </td>
        <td v-else>
            BYE
        </td>
        <td>
            {{this.matchup.team_score}}
        </td>
        <td v-if="this.matchup.opponent">
            {{this.matchup.opponent.name}}
        </td>
        <td v-else>
            BYE
        </td>
        <td>
            {{this.matchup.opponent_score}}
        </td>
    </tr>
</template>

<script>



export default {
    name: 'TeamMatchup',
    components: {
      
    },
    props: {
        matchup: {}
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

    .winner {
        background-color: rgb(144, 202, 119)
    }

    .loser {
        background-color: rgb(228, 135, 67)
    }

</style>