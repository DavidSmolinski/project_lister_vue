<template>
  <div id="app">
    <div class="container">
      <div class="title text-center">
        <h2>
          <img :src="img_urls.head" class="App-logo" alt="head" />
          Portfolio Lister
          <img :src="img_urls.vue_logo" class="App-logo" alt="vue_logo" />
        </h2>
      </div>
      <div class="jumbo-heading">
        <h6 class="date">by David Smolinski</h6>
      </div>
      <div class="jumbotron">
        This app is made with VueJS and JavaScript. It will allow users to
        select code skills (languages, modules, etc.) in my portfolio, and view
        projects that use those skills. For now, I'm using dummy data for skills
        and projects.
      </div>

      <div class="jumbo-heading">
        <h6 class="date">Links</h6>
      </div>

      <div class="jumbotron links">
        <a
          class="checkbox_link"
          href="https://davidsmolinski.github.io/project_lister/"
        >
          <span>
            <label>
              <img
                :src="img_urls.react_logo"
                class="App-logo-still"
                alt="react_logo"
              />
              React version
            </label>
          </span>
        </a>
        <a
          class="checkbox_link"
          href="https://github.com/DavidSmolinski/project_lister/tree/master"
        >
          <span>
            <label>
              <img
                :src="img_urls.react_logo"
                class="App-logo-still"
                alt="react_logo"
              />
              React code
            </label>
          </span>
        </a>
        <a
          class="checkbox_link"
          href="https://github.com/DavidSmolinski/portfolio/tree/master/table%20of%20contents"
        >
          <span>
            <label>
              my code portfolio
            </label>
          </span>
        </a>
      </div>

      <div class="jumbo-heading">
        <h6 class="date">Instructions</h6>
      </div>
      <div class="jumbotron">
        Click on skills to select or unselect them. Selected skills are
        highlighted orange. A list of projects with at least one of the selected
        skills will be shown. The number of selected skills (n.s. skills) a
        project uses is listed before its name. The list is ordered by the n.s.
        skills each project uses. When there is a difference in the n.s. skills
        per project, these differences are shown with green highlighting.
        Projects with more selected skills are greener.
      </div>

      <Lister />
    </div>
  </div>
</template>

<script>
import Lister from './components/Lister.vue'

export default {
  name: 'App',
  components: {
    Lister
  },
  data: function() {
    return {
      img_urls: {
        vue_logo: require('./assets/vue_logo.png'),
        react_logo: require('./assets/react_logo.png'),
        head: require('./assets/head.png')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.App-logo-still {
  height: 5vmin;
  pointer-events: none;
}

.App-logo {
  height: 5vmin;
  pointer-events: none;
  padding: 0.01em 10px;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.title {
  margin-top: 50px;
  color: white;
  font-weight: bolder !important;
  padding-bottom: 5px !important;
  padding: 16px;
  background-color: #e67244;
  border: 1px solid #e67244;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
}

.jumbo-heading {
  /* background-color: rgb(97, 218, 251); */
  background-color: #42b983;
  padding: 4px;
  color: white;
  border: 1px solid #42b983;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
}

.date {
  margin-bottom: 0;
  font-size: 16px;
  display: inline-flex;
  margin-right: 100px;
}

.jumbotron {
  padding: 16px;
  border-radius: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
}

.links {
  padding: 8px 10px 0px 10px;
}

.checkbox_link {
  background-color: white;
  padding: 25px 0px;
  margin: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}

.checkbox_link label {
  color: black;
  padding: 25px 8px;
}

@media screen and (min-width: 480px) {
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
  }
}

@media screen and (max-width: 1680px) {
  html {
    font-size: 12pt;
  }
  h2 {
    font-size: 28pt;
  }
}

@media screen and (max-width: 1280px) {
  html {
    font-size: 11pt;
  }
  h2 {
    font-size: 22pt;
  }
}

@media screen and (max-width: 360px) {
  html {
    font-size: 10pt;
  }
  h2 {
    font-size: 18pt;
  }
}

body {
  background-image: url('./assets/bee_bg.jpg');
  background-position: top center;
  background-repeat: repeat-y;
  background-size: 100% auto;
}

a:hover {
  background-color: #e67244;
}
</style>
