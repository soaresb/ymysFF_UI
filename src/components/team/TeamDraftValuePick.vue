<template>
    <tr>
        <td>
            {{this.pick.position}}
        </td>
        <td>
            {{this.pick.name}}
        </td>
        <td>
            {{this.pick.year}}
        </td>
        <td>
            {{this.pick.pre_rank}}
        </td>
        <td>
            {{this.pick.season_rank}}
        </td>
        <td>
            {{this.pick.round}}.{{this.pick.pick}}
        </td>
    </tr>
</template>

<script>



export default {
    name: 'TeamDraftValuePick',
    components: {
      
    },
    props: {
        pick: {}
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

</style>