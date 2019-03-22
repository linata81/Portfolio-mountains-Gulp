<template lang="pug">
  #about
    h1 Страница "обо мне"
    skills-row(
      v-for="type in types"
      :key="type.id"
      :type="type"
      :skills="skills"
    )
</template>

<script>
import skillsRow from './skillsRow';
export default {
  components: {
    skillsRow
  },
  props:{
    skills: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      types: [
        { id: 0, name: "frontend" },
        { id: 1, name: "backend" },
        { id: 2, name: "workflow" }
      ]
    };
  }
}
</script>

