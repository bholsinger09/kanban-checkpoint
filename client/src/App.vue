<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">Life Organiser</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/boards">Boards <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link style="color: #e500fa;" class="nav-link" to="/about">Micaiah</router-link>
          </li>
          <li class="nav-item">
            <router-link style="color: #0026ff;" class="nav-link" to="/about">David</router-link>
          </li>
          <li class="nav-item">
            <router-link style="color: #15ff00;" class="nav-link" to="/about">Daniel</router-link>
          </li>
          <li class="nav-item">
            <router-link style="color: #ff0000;" class="nav-link" to="/about">Benjamin</router-link>
          </li>
          <li class="nav-item">
            <router-link style="color: #fffb00;" class="nav-link" to="/about">Michael</router-link>
          </li>
        </ul>
        <button class="fancy-pancy-create-button nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
            aria-expanded="false">Create New</a>
          <form class="dropdown-menu" x-placement="bottom-start"
            style="position: absolute; transform: translate3d(0px, 39px, 0px); top: 0px; left: 0px; will-change: transform;">
            <input class="form-control " type="text" placeholder="Title" v-model="newBoard.title">
            <input class="form-control " type="text" placeholder="Description" v-model="newBoard.content">
            <div class="dropdown-divider"></div>
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Create</button>
          </form>
        </button>

      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App",

    data() {
      return {
        newBoard: {
          title: '',
          content: '' || 'No Description',
          creator: '', //make user
        }
      }
    },
  };
</script>

<style>
  .fancy-pancy-create-button {
    color: rgba(255, 0, 221, 0.541)
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  a {
    color: #42b983;
  }
</style>