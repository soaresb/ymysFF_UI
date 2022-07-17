<template>
    <div class="card RakingCard">
        <img src="" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{this.ranking.ranking}} - {{this.ranking.title}}</h5>
            <p class="card-text" v-html="this.ranking.body"></p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>



export default {
    name: 'Ranking',
    components: {
      
    },
    props: {
        ranking: {}
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