<template>
    
    <td :class="this.getPosition()">
        <!-- <div class="draft-pick-number">
            {{this.pick.pick}}
        </div> -->
        <div class="draft-pick-name">
            <a class="draft-pick-link" :href="'/player/' + this.pick.espn_id">{{this.pick.name}}</a>
        </div>
        <div class="draft-pick-details">
            {{this.pick.position}}
        </div>
         <div class="draft-pick-team">
            {{this.pick.team.name}}
        </div>
    </td>     
    
</template>

<script>



export default {
    name: 'DraftPick',
    components: {
      
    },
    props: {
        pick: {},
        roundNum: null
    },
    data(){
        
    },
    mounted() {

    },
    methods: {
        getPosition () {
            var _class = "";
            switch(this.pick.position) {
                case "QB":
                    _class = "draft-pick QB";
                    break
                case "RB":
                    _class = "draft-pick RB";
                    break
                case "WR":
                    _class = "draft-pick WR";
                    break
                case "TE":
                    _class = "draft-pick TE";
                    break
                case "K":
                    _class = "draft-pick K";
                    break;
                case "DST":
                    _class = "draft-pick DST";
                    break;
                case "IDP":
                    _class = "draft-pick IDP";
                    break;
                default:
                    _class = "draft-pick";
                    break;
            }
            return _class;
        }
    
    }
    
        
}

</script>

<style lang="scss">

    .draft-pick {
        font-size: 10px;
        border: 1px solid black;
        padding: 0px !important;
        max-width: 100px;
        width: 100px;
        color: black;
    }

    .draft-pick-name {
        margin: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        white-space: nowrap;
    }

    .draft-pick-number {
        margin: 5px;
    }

    .draft-pick-details {
        margin: 5px;
        flex-wrap: wrap;
        margin: 0 0 0 5px;
        padding: 0;
    }

    .draft-pick-team {
        margin: 5px;
        flex-wrap: wrap;
        padding: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        white-space: nowrap;
    }

    .QB {
        background-color: #dfd8ea !important;
        --bs-table-accent-bg: none !important;
    }

    .RB {
        background-color: #ccd9fd !important;
        --bs-table-accent-bg: none !important;
    }

    .WR {
        background-color: #d5e4db !important;
        --bs-table-accent-bg: none !important;
    }

    .TE {
        background-color: #f8d8d4 !important;
        --bs-table-accent-bg: none !important;
    }

    .K {
        background-color: #bbdce2 !important;
        --bs-table-accent-bg: none !important;
    }

    .DST {
        background-color: #e6e6e6 !important;
        --bs-table-accent-bg: none !important;
    }

    .IDP {
        background-color: #eceacf !important;
        --bs-table-accent-bg: none !important;
    }

    .draft-pick-link {
        color: #000000
    }

</style>