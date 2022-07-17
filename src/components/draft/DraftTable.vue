<template>
    <table class="table table-scroll draft-table">
        <tbody>
            <draft-round v-for="(round, index) in this.rounds" v-bind:key="round.id" :round="round" :roundNum="index" />
        </tbody>

    </table>
</template>

<script>

import DraftRound from './DraftRound.vue';

export default {
    name: 'DraftTable',
    components: {
        DraftRound
    },
    props: {
        rounds: [],
        order: []
    },
    data(){
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
    
    }
    
        
}

</script>

<style lang="scss">

    .table-scroll {
        overflow-x:auto;
    }

    .draft-table {
        --bs-table-accent-bg: none !important
    }

    .draft-table-header {
        font-size: 12px;
        max-width: 50px;
        overflow: hidden;
        border: 1px solid black;
    }


    .thead {
        vertical-align: middle;
    }

    
</style>