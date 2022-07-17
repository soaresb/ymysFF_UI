<template>
    <apexchart
        id="draftpickgraph"
        type="line"
        :options="chartOptions"
        :series="series"
    ></apexchart>
</template>

<script>

import VueApexCharts from "vue3-apexcharts";

export default {
    name: 'PlayerDraftHistory',
    components: {
        apexchart: VueApexCharts,
    },
    props: {
        draftHistory: []
    },
    data(){
        return {
            teams: [],
            chartOptions: {
                xaxis: {
                    categories: [],
                },
                yaxis: {
                    min: 0
                },
                
                dataLabels: {
                    enabled: true
                },

                grid: {
                    position: 'front'
                },

                tooltip: {
                    enabled: true,
                    y: {
                        show: true
                    }
                },

                theme: {
                    mode: "dark",
                    palette: 'palette10'
                }
            },
            series: [
                {
                    name: "pick",
                    data: []
                },
            ],
        };
    },
    mounted() {
        this.loadGraph();
    },
    methods: {

        loadGraph() {
            const years = this.draftHistory.map((draftPick) => draftPick.year);
            const teams = this.draftHistory.map((draftPick) => {
                if (draftPick.team) {
                    return draftPick.team.name;
                } else {
                    return "";
                }
            });
            const picks = this.draftHistory.map((draftPick) => draftPick.total_pick);
            this.chartOptions = {
                ...this.chartOptions,
                chart: {
                    toolbar: {
                        show: false
                    }
                },
                xaxis: {
                    categories: years,
                }
            };
            this.series = [
                {
                    name: "pick",
                    data: picks
                },
            ];
            this.teams = teams;
            this.chartOptions.tooltip.y.formatter = (val, opts) => {
                const index = opts.dataPointIndex;
                return `${this.teams[index]}`
            }

            // this.chartOptions.dataLabels.formatter = (val, opts) => {
            //     const index = opts.dataPointIndex;
            //     return `${val} - ${this.teams[index]}`
            // }
        }
    
    }
    
        
}

</script>

<style lang="scss">

    #draftpickgraph {
        max-width: 650px;
        margin: auto;
    }
    
</style>