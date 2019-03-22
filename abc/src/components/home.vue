

<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <ul>
      <li v-for="article in articles">
        
        <a :href ="article.alt">{{article.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>

import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

export default {
  name: "app",
  data() {
    return {
      articles: [
        { title: "巴士" },
        { title: "快车" },
        { title: "专车" },
        { title: "顺风车" },
        { title: "出租车" },
        { title: "代驾" }
      ],
      msg: "Welcome to Your Home"
    };
  },
  components: {},
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  mounted: function() {
    this.$http.jsonp("https://api.douban.com/v2/movie/top250?count=10",{},{ headers: {}, emulateJSON: true })
      .then(
        function(response) {
          // 这里是处理正确的回调
          this.articles = response.data.subjects;
          // this.articles = response.data["subjects"] 也可以
          console.log(response)
        },
        function(response) {
          // 这里是处理错误的回调 
          console.log(response)
        }
      );
  }
};
</script>

