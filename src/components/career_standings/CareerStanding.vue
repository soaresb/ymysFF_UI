<template>
    <div class="card career-standing-card">
        <img src="" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{this.standing.team.name}}</h5>
            <p class="card-text">Wins: {{this.standing.standing.wins}}</p>
            <p class="card-text">Losses: {{this.standing.standing.losses}}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>



export default {
    name: 'CareerStanding',
    components: {
      
    },
    props: {
        standing: {}
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

.card {
    margin-bottom: 20px;
}


</style>