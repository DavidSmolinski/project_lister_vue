<template>
  <div>
    <div class="jumbo-heading">
      <h6 class="date">code skills</h6>
    </div>
    <div class="jumbotron">
      <span
        v-for="(skill, i) in skills"
        :key="skill.id"
        @click="
        skill.on = !skill.on
        make_projects_to_show
        "
        class="checkbox"
        :class="color_skill(skill.on)"
        v-model="skill.on"
      >
        
        <!-- @@click="sdfasfsdf
        skill.on = !skill.on
        
        " -->
        
        <!-- <label> {{ i }} {{ skill.name }} {{ skill.on }} </label> -->
        <label> {{ skills[skill.id].name }} {{ i }} </label>
      </span>
    </div>

    <div class="jumbo-heading">
      <h6 class="date">projects with the selected skills</h6>
    </div>
    <div class="jumbotron">
      renderProjs
      {{ pts }}
      
      <span
        v-for="skill in skills"
        :key="skill.id"
        class="checkbox"
        :class="color_skill(skill.on)"
      >
        
        <!-- @@click="sdfasfsdf
        skill.on = !skill.on
        
        " -->
        
        <!-- <label> {{ i }} {{ skill.name }} {{ skill.on }} </label> -->
        <label> {{ skill.name }} {{ skill.on }} </label>
      </span>
      
      
    </div>
    
    
  </div>
</template>

<script>
import { main_state } from './main_state'
// import { numpy as np } from './python.js'

export default {
  name: 'Lister',
  // props: {
  //   msg: String
  // },

  // data: () => {
  //   return main_state
  // },

  data: () => {
    return {
      ...main_state,
      projects_to_show: [1,2],
      // In this array, Indices correspond to projects, and elements are the
      // number of "on skills" (skills chosen by the user) for each project.
      projects_on: Array(main_state.skills_projects[0].length).fill(0),
      
    }
  },
  computed: {
    pts() {
      return this.projects_to_show
    }
  },
  methods: {
    color_skill(on) {
      return on ? 'on_skill_style' : 'off_skill_style'
    },

    make_projects_to_show() {
      // Return an arr of project indices in the order that they will be shown.
      this.projects_to_show = this.projects_on
        .map((e, i) => [e, i])
        .filter(e => e[0] !== 0)
        .sort((a, b) => b[0] - a[0])
        .map(e => e[1])
    }

    // {
    //   return on ? 'on_skill_style' : 'off_skill_style'
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
