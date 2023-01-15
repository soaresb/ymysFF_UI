<template>
<div class="row">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a @click="toggleTeams()" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Teams
                        </a>
                        <div class="initial" :class="{'dropdown-menu' : teamsIsActive}" aria-labelledby="navbarDropdown">
                            <div v-for="team in this.teams" v-bind:key="team._id">
                                <a class="dropdown-item" :href="team.url">{{team.name}}</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/power-rankings">Power Rankings</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/draft">Draft History</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script>

export default {
    name: 'Navbar',
    props: {
        
    },
    data(){
        return {
            teams: [],
            teamsIsActive: false,
            league: {}
        }
    },
    mounted() {
        return Promise.all([
            this.$ymysApi.get("/teams"),
            this.$ymysApi.get("/league/info")
        ]).then((responses) => {
            const [teamsResponse, leagueResponse] = responses;
            this.teams = teamsResponse.data.results.map((team) => {
                return { ...team, url: `/team/${team.espn_team_id}`};
            });
            this.leagueIngo = leagueResponse.data.results;
            })
        .catch((error) => {
            console.error(error.response);
        });
    },
    methods: {
        toggleTeams() {
            this.teamsIsActive = !this.teamsIsActive;
        }
    }
    
        
}

</script>

<style lang="scss">
    .initial {
        display: none;
    }

    .dropdown-menu {
        display: block !important;
    }

    .dropdown-toggle {
        background-image: none !important;
        min-width: auto !important;
    }

    .caret {
        display: none !important
    }
    
    
</style>