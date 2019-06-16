<template>
  <div class="col-3">
    <div style="height: auto; margin: 25px; min-width: 320px; max-width: 8%" class="card card-803 "
      v-for="board in boards" :key="board._id">
      <!--here is where the router link goes to switch to board view-->
      <router-link class="title-color card-header" :to="{name: 'board', params: {boardId: board._id}}">
        <h5>Board Title: {{board.title}}</h5>
      </router-link>
      <h6 class="board-creator">Board By:</h6>
      <div class="card-body">
        <p class=" body-color card-text"> Board Description: {{board.description}}</p>
      </div>
      <div class="card-body">
        <button @click="deleteBoard(board._id)" class="btn btn-primary rounded">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Board',
    mounted() {
      this.$store.dispatch("getBoards");
    },
    computed: {
      boards() {
        return this.$store.state.boards;
      }
    },
    methods: {

      deleteBoard(boardId) {
        this.$store.dispatch("deleteBoard", boardId);
      }
    },
  }
</script>

<style scoped>
</style>