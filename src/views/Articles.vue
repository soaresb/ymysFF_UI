<template>
  <div class="articles">
    <div class="container">
        <QuillEditor theme="snow" toolbar="full" ref="myEditor" />
    </div>  
    
    <br />
    
    <form>
      <div class="form-group row">
        <label for="year" class="col-sm-2 col-form-label">Year</label>
        <div class="col-sm-10">
        <input v-model="year" type="text" class="form-control" id="year" placeholder="2021">
        </div>
      </div>
      <br/>
      <div class="form-group row">
        <label for="week" class="col-sm-2 col-form-label">Week</label>
        <div class="col-sm-10">
          <input v-model="week" type="text" class="form-control" id="week" placeholder="1">
        </div>
      </div>
    </form>

    <br />

    <button @click="this.submit" type="button" class="btn btn-outline-dark">Dark</button>
    
  </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


export default {
  name: 'Articles',
  components: {
    QuillEditor
  },
  created() {

  },
  data() {
    return {
        htmlContent: "",
        rankingArticle: "",
        week: "",
        year: ""
    }
  },
  mounted() {
    this.fetchRankingArticle();
  },
  methods: {
      submit() {
          var html = this.$refs.myEditor.getHTML();
          return Promise.all([
              this.$ymysApi.post("/league/power-ranking", { body: html, year: this.year, week: this.week })
          ]).then((responses) => {
              this.logger(responses[0])
          }).catch((err) => {
              this.logger(err);
          })
      },

      fetchRankingArticle() {
          const params = {};
          params.year = 2021; // todo update
          params.week = 1; // todo update
          return Promise.all([
              this.$ymysApi.get(`/league/powerranking`, { params }),
          ]).then((responses) => {
              const [rankingArticleResponse] = responses;
              this.rankingArticle = rankingArticleResponse.data.results;
          })
          .catch((error) => {
            console.error(error.response);
          });
    },
  }
}
</script>

<style lang="scss">

  .articles {
      margin-top: 30px;
      padding: 25px;
      background-color: white;
      color: black !important;
  }

</style>
