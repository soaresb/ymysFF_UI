<template>
    <div class="homerankings">
        <div v-for="team in rankings" v-bind:key="team.id">
            <ol type="1" class="homerankings-list">
                <li>{{team.name}}</li>
            </ol>
        </div>
    </div>
</template>

<script>


export default {
    name: 'HomeRankings',
    components: {
      
    },
    props: {
        
    },
    data(){
        return {
            rankings: []
        }
    },
    mounted() {
        // todo implement api
        this.rankings = [
            {name: "Team Never Lucky", "rank": 1},
            {name: "Team Never Lucky", "rank": 2},
            {name: "Team Never Lucky", "rank": 3},
            {name: "Team Never Lucky", "rank": 4},
            {name: "Team Never Lucky", "rank": 5},
            {name: "Team Never Lucky", "rank": 6},
            {name: "Team Never Lucky", "rank": 7},

        ]
    },
    methods: {
    
    }
    
        
}

</script>

<style lang="scss">

    .homerankings-list {
        text-align: left;
    }

</style>