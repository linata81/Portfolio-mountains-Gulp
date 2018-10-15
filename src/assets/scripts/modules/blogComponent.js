import Vue from 'vue';

const asideMenu = {
  template:"#blog-asideMenu",
  props: {
    articles: Array,
    title: String
  },
}
const articles = {
  template:"#blog-articles",
  props: {
    articles: Array,
    title: String,
    date: String,
    text: String
  }
}

new Vue({
  el: '#blog-component',
  components: {
    asideMenu, articles
  },
  data() {
    return {
      articles: []
    }
  },
  created(){
    const data = require('../../../data/articles.json');
    this.articles = data;
  },
  template: "#blog-root"
});