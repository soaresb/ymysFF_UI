<template>
    <div class="container">
        <div class="row" style="padding-top: 25px; padding-bottom: 15px;">
            <div class="col-md">
                <apexchart
                    id="draftpickgraph"
                    type="line"
                    :options="draftPickChartOptions"
                    :series="draftPickSeries"
                ></apexchart>
            </div>
            <div class="col-md">
                <apexchart
                    id="draft-ros-comparison"
                    type="line"
                    :options="draftROSComparisonChartOptions"
                    :series="draftROSComparisonSeries"
                ></apexchart>
            
            </div>
        </div>
    </div>
    

    
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
            preRanks: [],
            EOSRanks: [],
            draftPickChartOptions: {
                title: {
                    text: "Draft Position by Year",
                    align: "center"
                },
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
            draftPickSeries: [
                {
                    name: "pick",
                    data: []
                },
            ],
            draftROSComparisonChartOptions: {
                title: {
                    text: "Draft Position vs End of Season Position Rank",
                    align: "center"
                },
                selection: {
                    enabled: true,
                },
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
            draftROSComparisonSeries: [
                {
                    name: "Draft Position",
                    data: []
                },
                {
                    name: "End of Season Rank",
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
            this.preRanks = this.draftHistory.map((draftPick) => { 
                return parseInt(draftPick.pre_rank.replace(/\D/g,''))
            });
            this.EOSRanks = this.draftHistory.map((draftPick) => { 
                return parseInt(draftPick.season_rank.replace(/\D/g,''))
            });
            this.draftPickChartOptions = {
                ...this.draftPickChartOptions,
                chart: {
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false,
                    }
                },
                xaxis: {
                    categories: years,
                }
            };
            this.draftPickSeries = [
                {
                    name: "pick",
                    data: picks
                },
            ];
            this.draftROSComparisonChartOptions = {
                ...this.draftROSComparisonChartOptions,
                chart: {
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false,
                    }
                },
                xaxis: {
                    categories: years,
                }
            };
            this.draftROSComparisonSeries = [
                {
                    name: "Draft Position",
                    data: this.preRanks
                },
                {
                    name: "End of Season Rank",
                    data: this.EOSRanks
                },
            ];
            this.teams = teams;
            this.draftPickChartOptions.tooltip.y.formatter = (val, opts) => {
                const index = opts.dataPointIndex;
                return `${this.teams[index]}`;
            }
        }
    
    }
    
        
}

</script>

<style lang="scss">

    #draftpickgraph {
        max-width: 650px;
        margin: auto;
    }

    #draft-ros-comparison {
        max-width: 650px;
        margin: auto;
    }
    
</style>