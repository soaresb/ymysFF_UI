<template>
    <h1>YMYS Draft {{this.year.year}}</h1>
    <dropdown :options="years" :selected="year" v-on:updateOption="onSelectYear" :placeholder="this.year.year"></dropdown>
    <draft-table :rounds="this.rounds" :order="this.order" />
</template>

<script>
// @ is an alias to /src

import DraftTable from "../components/draft/DraftTable.vue";
import dropdown from 'vue-dropdowns';
const _ = require("lodash");

export default {
    name: 'Draft',
    components: {
        DraftTable,
        'dropdown': dropdown
    },
    created() {

    },
    data() {
        return {
            draftPicks: [],
            rounds: [],
            order: [],
            year: {
                year: 2021
            },
            years: []
        }
    },
    mounted() {
        this.fetchDraft();
        return Promise.all([
            this.$ymysApi.get(`/seasons`)
        ])
        .then((responses) => {
            const [seasonsResponse] = responses;
            this.years = seasonsResponse.data.results.seasons.map((season) => {
                return { year: season.year, name: season.year };
            });
        })
        .catch((error) => {
            console.error(error.response);
        });
    },
    methods: {
        modifyRounds(rounds) {
            const r = [];
            _.forIn(rounds, (round, roundNum) => {
                if (roundNum % 2 === 0) {
                    r.push(_.reverse(_.sortBy(round, "pick")));
                } else {
                    r.push(_.sortBy(round, "pick"));
                }
            })
            this.rounds = r;
            this.order = r[0].map((pick) => pick.team.name);
        },

        fetchDraft(year) {
            const params = {};
            params.year = year || this.year.year;
            return Promise.all([
                this.$ymysApi.get(`/league/draft`, { params }),
            ])
            .then((responses) => {
                const [draftResponse] = responses;
                this.draftPicks = draftResponse.data.results;
                const rounds = _.groupBy(this.draftPicks, "round");
                this.modifyRounds(rounds);
            })
            .catch((error) => {
                console.error(error.response);
            });
        },

        onSelectYear(payload) {
            const { year }  = payload;
            this.year = {
                year,
                name: year
            };
            this.fetchDraft(year);
        },
    }
}
</script>
