<template lang="pug">
  #root
    .header
      app-header
    .tabs
      tabs
    .content
      skills(
        :skills="skills"
      )
</template>

<script>
import header from "./components/header";
import tabs from "./components/tabs";
import skills from "./components/skills";
import {mapActions} from 'vuex';

const data = [
  { id: 1, title: "Html5", percent: 20, category: 0 },
  { id: 2, title: "PHP", percent: 20, category: 1 },
  { id: 3, title: "CSS3", percent: 20, category: 0 },
  { id: 4, title: "Node.js", percent: 20, category: 1 },
  { id: 5, title: "Mongo", percent: 20, category: 1 },
  { id: 6, title: "Git", percent: 20, category: 2 },
  { id: 7, title: "Gulp", percent: 20, category: 2 },
  { id: 8, title: "JavaScript", percent: 20, category: 0 },
  { id: 9, title: "Yarn", percent: 20, category: 2 }
];

export default {
  components: {
    appHeader: header,
    tabs,
    skills
  },
  data(){
    return {
      skills: data
    }
  },
  created(){
    this.fetchSkills();
  },
  methods: {
    ...mapActions({
      fetchSkills: "skills/fetch"
    })
  }
}
</script>

<style lang="scss">
  body, html {
    margin: 0;
    height: 100%;
  }
  .wrapper {
    height: 100%;
  }
  #root {
  height: 100%;
  display: flex;
  flex-flow: column;
  }
  .header {
  height: 80px;
  }
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
    }
  }
  * {
    box-sizing: border-box;
  }
  .tabs {
    height: 60px;
  }
  .content {
    flex: 1;
    padding: 20px;
  }
</style>

