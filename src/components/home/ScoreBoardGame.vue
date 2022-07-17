<template>
    <div class="scoreboardgame-game">
        <li class="scoreboardgame-cell">
            <div class="row ">
                <div class="col-6 scoreboardgame-teamname">
                    {{this.matchup.home_team.name}}
                </div>
                <div class="col-6">
                    {{this.matchup.home_score}}
                </div>
            </div>
        </li>
        <li class="scoreboardgame-cell">
            <div class="row">
                <div class="col-6 scoreboardgame-teamname">
                    {{this.matchup.away_team.name}}
                </div>
                <div class="col-6">
                    {{this.matchup.away_score}}
                </div>
            </div>
        </li>
    </div>
</template>

<script>

export default {
    name: 'ScoreBoardGame',
    props: {
        matchup: {
            required: true
        },
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

    .scoreboardgame-game {
        margin: 5px 0;
        border-bottom: 1px solid lightgray;
    }

    .scoreboardgame-teamname{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .scoreboardgame-cell {
        list-style: none;
        text-align: left;
        padding: 5px 0;
    }

</style>