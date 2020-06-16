<template>
  <div class="nav-wrapper">
    <div class="nav" :class="navState">
      <ul class="nav__list">
        <li class="nav__list-item">Link 1</li>
        <li class="nav__list-item">Link 2</li>
        <li class="nav__list-item">Link 3</li>
      </ul>
    </div>
    <button 
      @click="showNavigation"
      class="btn"
      :disabled
    >
      <span v-if="!navActive">Show Navigation</span>
      <span v-else>Hide Navigation</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Naviagtion',
  data() {
    return {
      navActive: false,
    };
  },
  computed: {
    navState() {
      return this.navActive ? 'nav--active' : 'nav--inactive';
    },
  },
  methods: {
    showNavigation() {
      this.navActive = !this.navActive;
    }
  },
};
</script>

<style>
.nav--active {
  display: block;
}
.nav--inactive {
  display: none;
}
.nav__list {
  list-style: none;
  display: flex;
  width: 50%;
  justify-content: space-around;
}
</style>