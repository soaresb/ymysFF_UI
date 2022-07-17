<template>
    <player-header :player="this.player" />
    <nav>
        <div class="nav nav-tabs justify-content-end" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-ymys-game-log-tab" data-bs-toggle="tab" data-bs-target="#nav-ymys-game-log" type="button" role="tab" aria-controls="nav-ymys-game-log" aria-selected="true">Ymys Game Log</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
            <button class="nav-link" id="nav-drafthistory-tab" data-bs-toggle="tab" data-bs-target="#nav-drafthistory" type="button" role="tab" aria-controls="nav-drafthistory" aria-selected="false">Draft History</button>
        </div>
    </nav>
    <div class="row" style="border: 1px solid; border-radius: 10px;"> 
        <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-ymys-game-log" role="tabpanel" aria-labelledby="nav-ymys-game-log-tab">
            <player-stats :playerStats="this.playerStats" :player="this.player" />
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div class="row">
                <div class="col-12">
                    <team-matchups />
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="nav-drafthistory" role="tabpanel" aria-labelledby="nav-drafthistory-tab">
            <player-draft-history v-if="this.draftHistory" :draftHistory="this.draftHistory" />
        </div>
        </div>
    </div> 
    
  
</template>

<script>
// @ is an alias to /src

import PlayerStats from "../components/player/PlayerStats.vue";
import PlayerHeader from "../components/player/PlayerHeader.vue";
import PlayerDraftHistory from "../components/player/PlayerDraftHistory.vue";


export default {
  name: 'Player',
  components: {
     PlayerStats,
     PlayerHeader,
     PlayerDraftHistory,
  },
  created() {

  },
  data() {
      return {
          id: this.$route.params.playerId,
          player: {},
          playerStats: [],
          draftHistory: null
      }
  },
  mounted() {
      this.fetchPlayer();
      this.fetchPlayerStats();
      this.fetchPlayerDraftHistory();
  },
  methods: {
      fetchPlayer() {
          return Promise.all([
                this.$ymysApi.get(`/player/${this.id}`)
            ]).then((responses) => {
                const [playerResponse] = responses;
                this.player = playerResponse.data.results;
            })
            .catch((error) => {
                console.error(error.response);
            });
      },

      fetchPlayerStats() {
          return Promise.all([
                this.$ymysApi.get(`/player/${this.id}/stats`)
            ]).then((responses) => {
                const [playerStatsResponse] = responses;
                this.playerStats = playerStatsResponse.data.results;
            })
            .catch((error) => {
                console.error(error.response);
            });
      },

      fetchPlayerDraftHistory() {
          return Promise.all([
                this.$ymysApi.get(`/player/${this.id}/draft-history`)
            ]).then((responses) => {
                const [draftHistoryResponse] = responses;
                const draftHistory = draftHistoryResponse.data.results;
                this.formatDraftHistory(draftHistory);
            })
            .catch((error) => {
                console.error(error.response);
            });
      },

      formatDraftHistory(draftHistory) {
          this.draftHistory = draftHistory;
      }
  }
}
</script>
