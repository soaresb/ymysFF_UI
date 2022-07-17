<template>
    <tr>
        <td class="table-primary draft-table-header">
            <p>
                Round: {{this.roundNum + 1}}
            </p>
            <i :class="this.getRoundArrow()"></i>
        </td>
        <draft-pick v-for="pick in this.round" v-bind:key="pick.id" :pick="pick" :roundNum="this.roundNum" />
        
    </tr>
</template>

<script>

import DraftPick from './DraftPick.vue';

export default {
    name: 'DraftRound',
    components: {
        DraftPick
    },
    props: {
        round: [],
        roundNum: null
    },
    data(){
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        getRoundArrow () {
            if (this.roundNum % 2 === 0) {
                return "arrow right"
            } else {
                return "arrow left"
            }
        }
    }
    
        
}

</script>

<style lang="scss">

    .table-scroll {
        overflow-x:auto;
    }

    .arrow {
        border: solid white;
        border-width: 0 1px 1px 0;
        display: inline-block;
        padding: 3px;
        margin-left: 5px;
        margin-bottom: 5px;
    }

    .right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }

    .left {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }
    
</style>