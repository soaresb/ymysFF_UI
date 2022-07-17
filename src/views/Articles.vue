<template>
  <div class="articles">
    <QuillEditor theme="snow" toolbar="full" ref="myEditor" />
    <button @click="test">Login</button>
    <p class="ql-align-center">Hello</p><ol><li>Team Never Lucky</li><li>47th Floor Crew</li></ol>
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
        htmlContent: ""
    }
  },
  mounted() {
    
  },
  methods: {
      test() {
          var html = this.$refs.myEditor.getHTML();
          console.log(html);
      }
  }
}
</script>
