<template>
    <div class="homerankings">
        <div v-for="division in standings" v-bind:key="division.id" class="homestandings-division">
            <ol class="homestandings-list">
                <li v-for="team in division" v-bind:key="team.id" class="homestandings-team">{{team.name}}</li>
            </ol>
        </div>
    </div>
</template>

<script>


export default {
    name: 'HomeStandings',
    components: {
      
    },
    props: {
        standings: []
    },
    data(){
        return {
            
        }
    },
    mounted() {
        console.log(123);
    },
    methods: {
    
    }
    
        
}

</script>

<style lang="scss">

    .homestandings-list {
        text-align: left;
    }

    .homestandings-division {
        border: 1px solid black;
        margin: 10px 0;
    }

</style>