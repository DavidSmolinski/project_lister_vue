<template>
  <span :style="color()">
    <label> {{ num_proj_skills() }}: {{ name }} </label>
  </span>
</template>

<script>
export default {
  name: 'Project',
  props: ['proj_i', 'projects_to_show', 'projects_on', 'name'],
  methods: {
    num_proj_skills() {
      return this.projects_on[this.proj_i]
    },
    color() {
      let projects_to_show = this.projects_to_show
      let projects_on = this.projects_on

      let max_skills_proj = projects_to_show[0]
      let min_skills_proj = projects_to_show[projects_to_show.length - 1]

      let max_skills = projects_on[max_skills_proj]
      let min_skills = projects_on[min_skills_proj]
      let delta_skills = max_skills - min_skills
      let proj_skills = projects_on[this.proj_i]

      let color_inc = delta_skills === 0 ? 255 : 255 / delta_skills
      let proj_color = 255 - Math.floor(color_inc * (proj_skills - min_skills))
      return { backgroundColor: `rgb(${proj_color}, 255, ${proj_color})` }
    }
  }
}
</script>

<style></style>
