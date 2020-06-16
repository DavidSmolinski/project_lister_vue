<template>
  <div>
    <div class="jumbo-heading">
      <h6 class="date">code skills</h6>
    </div>
    <div class="jumbotron">
      <span
        v-for="skill in skills"
        :key="skill.id"
        @click="handle_click(skill.id)"
        class="checkbox"
        :class="color_skill(skill.on)"
      >
        <label> {{ skill.name }}</label>
      </span>
    </div>

    <div class="jumbo-heading">
      <h6 class="date">projects with the selected skills</h6>
    </div>
    <div class="jumbotron">
      <Project
        class="checkbox"
        v-for="proj_i in projects_to_show"
        :key="proj_i"
        :proj_i="proj_i"
        :projects_to_show="projects_to_show"
        :projects_on="projects_on"
        :name="projects[proj_i].name"
      />
    </div>
  </div>
</template>

<script>
import { main_state } from './main_state'
import { numpy as np } from './python.js'
import Project from './Project.vue'

export default {
  name: 'Lister',
  components: {
    Project
  },

  data: () => {
    return {
      ...main_state,
      // an arr of project indices in the order that they will be shown
      projects_to_show: [],
      // In this array, Indices correspond to projects, and elements are the
      // number of "on skills" (skills chosen by the user) for each project.
      projects_on: Array(main_state.skills_projects[0].length).fill(0)
    }
  },
  methods: {
    color_skill(on) {
      return on ? 'on_skill_style' : 'off_skill_style'
    },
    handle_click(i) {
      this.skills[i].on = !this.skills[i].on
      let projects_on = this.projects_on

      if (this.skills[i].on) {
        projects_on = np.add(projects_on, this.skills_projects[i])
      } else {
        projects_on = np.subtract(projects_on, this.skills_projects[i])
      }
      this.projects_on = projects_on

      this.projects_to_show = projects_on
        .map((e, i) => [e, i])
        .filter(e => e[0] !== 0)
        .sort((a, b) => b[0] - a[0])
        .map(e => e[1])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.checkbox {
  background-color: white;
  padding: 5px 1px;
  margin: 5px 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
  border-radius: 10px;
}

.checkbox label {
  font-size: 16px;
  padding: 8px;
  margin-bottom: 0;
}

.checkbox:hover {
  padding: 11px 3px 9px 3px;
  border-radius: 12px;
  font-weight: bolder;
}

.checkbox:hover label {
  text-decoration: underline overline !important;
}

.on_skill_style {
  background-color: #e67244;
}

.off_skill_style {
  background-color: white;
}
</style>
