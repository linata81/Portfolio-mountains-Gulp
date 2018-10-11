import Vue from 'vue';

const skill = {
  template: '#skill',
  props: {
    title: String,
    percentage: Number
  },
  methods: {
    drawCircleDependsOnPercentage(){
      const circle = this.$refs.circle;
      const currentPercent = parseInt(
        getComputedStyle(circle).getPropertyValue('stroke-dashoffset')
      );
      const requireDashoffset = (currentPercent/100)* (100-this.percentage);
      circle.style.strokeDashoffset = requireDashoffset;
    }
  },
  mounted(){
    this.drawCircleDependsOnPercentage();
  }
}
const skillsRow = {
  template: '#skills-item',
  props: {
    skillsCategory: Object
  },
  components: {
    skill
  }
}

new Vue({
  el: '#skills-component',
  components: {
    skillsRow
  },
  data(){
    return {
      skillsCategory: []
    }
  },
  created(){
    const data = require('../../../data/skills.json');
    this.skillsCategory = data;
  },
  template: '#skills-list'
});