<template>
  <!-- <span class="checkbox" :style="color()">
    <label>    
      {{ num_proj_skills() }}: {{ name }}
    </label>
  </span> -->
  
  <span
    class="checkbox"
    @click="handle_click(skill.id)"
    :class="color_skill(skill.on)"
    
  >
    <label> {{ skill.name }} {{ skill.on }}</label>
  </span>
  
</template>

<script>
import { numpy as np } from './python.js'


export default {
  name: 'Skill',
  props: ['skill','projects_to_show','projects_on'],
  
  // data: () => {
  //   return{
      
  //   }
  // }
  
  methods: {
    color_skill(on) {
      return on ? 'on_skill_style' : 'off_skill_style'
    },
    handle_click(i) {
      // updates skills, projects_to_show, and projects_on

      this.skill.on = !this.skill.on
      
      // this.$emit('skill_on_off', this.skills[i].on)
      
      let projects_on = this.projects_on

      if (this.skill.on) {
        projects_on = np.add(projects_on, this.skills_projects[i])
      } else {
        projects_on = np.subtract(projects_on, this.skills_projects[i])
      }
      this.projects_on = projects_on
      
      // Return an arr of project indices in the order that they will be shown.
      this.projects_to_show = projects_on
        .map((e, i) => [e, i])
        .filter(e => e[0] !== 0)
        .sort((a, b) => b[0] - a[0])
        .map(e => e[1])
    }    

    // handle_click(i) {
    //   // updates skills, projects_to_show, and projects_on

    //   this.skills[i].on = !this.skills[i].on
      
    //   this.$emit('skill_on_off', this.skills[i].on)
      
    //   let projects_on = this.projects_on

    //   if (this.skills[i].on) {
    //     projects_on = np.add(projects_on, this.skills_projects[i])
    //   } else {
    //     projects_on = np.subtract(projects_on, this.skills_projects[i])
    //   }
    //   this.projects_on = projects_on
      
    //   // Return an arr of project indices in the order that they will be shown.
    //   this.projects_to_show = projects_on
    //     .map((e, i) => [e, i])
    //     .filter(e => e[0] !== 0)
    //     .sort((a, b) => b[0] - a[0])
    //     .map(e => e[1])
    // }    


    
  },
}




</script>

<style>
.on_skill_style {
  background-color: #e67244;
}

.off_skill_style {
  background-color: white;
}

</style>