<template>
    <div class="row player-header">
        <h1>{{this.team.name}}</h1>
    </div>
</template>

<script>

export default {
    name: 'TeamHeader',
    components: {
      
    },
    props: {
        team: {},
    },
    data(){
      return {
          years: [
            { name: 2021 },
            { name: 2020 }
          ],
          year: {
            name: 2021
          }
      }
    },
    mounted() {

    },
    methods: {
      methodToRunOnSelect(payload) {
        this.object = payload;
      }
    }
    
        
}

</script>

<style lang="scss">
    
</style>