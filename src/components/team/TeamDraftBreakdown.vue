<template>
    <tr>
        <td>
            {{this.breakdown.position}}
        </td>
        <td>
            {{this.breakdown.avgDraftEfficiency}}
        </td>
        <td>
            {{this.breakdown.medianDraftEfficiency}}
        </td>
    </tr>
</template>

<script>



export default {
    name: 'TeamDraftBreakdown',
    components: {
      
    },
    props: {
        breakdown: {}
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