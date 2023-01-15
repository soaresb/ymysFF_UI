<template>
    <div class="container">
        <div class="row">
            <div class="col-12 team-draft-history-row">
                <h5>
                    Best "Value" Picks
                </h5>
                <table class="table table-scroll draft-history-table">
                    <thead>
                        <th>Position</th>
                        <th>Player</th>
                        <th>Year</th>
                        <th>Draft Position</th>
                        <th>EOS Rank</th>
                        <th>Pick Number</th>
                    </thead>
                    <tbody>
                        <team-draft-value-pick v-for="pick in this.draftHistory.details.valuePicks" :key="pick.id" :pick="pick"/>
                    </tbody>
                </table>
            </div>
            <div class="col-12 team-draft-history-row">
                <h5>
                    Average Draft Efficiency
                </h5>
                <table class="table table-scroll draft-history-table">
                    <thead>
                        <th>Position</th>
                        <th>Average Draft Efficiency</th>
                        <th>Median Draft Efficiency</th>
                    </thead>
                    <tbody>
                        <team-draft-breakdown v-for="breakdown in this.draftHistory.details.positionBreakdown" :key="breakdown.id" :breakdown="breakdown"/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import TeamDraftValuePick from './TeamDraftValuePick.vue';
import TeamDraftBreakdown from './TeamDraftBreakdown.vue';

export default {
    name: 'TeamDraftHistory',
    components: {
        TeamDraftValuePick,
        TeamDraftBreakdown
    },
    props: {
        draftHistory: {}
    },
    data(){
        
    },
    mounted() {
        console.log(this.draftHistory);

    },
    methods: {
    
    }
    
        
}

</script>

<style lang="scss">

    .team-draft-history-row {
        border: 1px solid;
        margin-top: 20px !important;
    }

</style>