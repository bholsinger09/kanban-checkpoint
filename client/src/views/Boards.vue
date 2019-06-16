<template>
  <div class="boards">
    <div class="container">
      <form @submit.prevent="addBoard">
        <input type="text" placeholder="title" v-model="newBoard.title" required>
        <input type="text" placeholder="description" v-model="newBoard.description">
        <button type="submit">Create Board</button>
      </form>
      <!--board component below-->
      <div class="row">
        <Board />


      </div>
    </div>
  </div>
</template>



<script>
  import Board from '@/components/Board.vue'
  export default {
    name: "boards",

    data() {
      return {
        newBoard: {
          title: "",
          description: ""
        }
      };
    },
    created() {
      //blocks users not logged in
      if (!this.$store.state.activeUser._id) {
        this.$router.push({ name: "login" });
      }
    },
    mounted() {
      this.$store.dispatch("getBoards");
    },

    components: {
      Board
    },
    methods: {
      addBoard() {
        this.$store.dispatch("addBoard", this.newBoard);
        this.newBoard = { title: "", description: "" };
      },

    },

  };
</script>



<style scoped>
  .card-803 {
    max-width: 100%;
  }

  .card,
  .card>* {
    background-color: rgba(85, 1, 163, 0.226);
  }

  .mix-a-lot {
    -webkit-text-fill-color: deepskyblue;
  }

  .title-color {
    -webkit-text-fill-color: cyan;
  }

  .body-color {
    -webkit-text-fill-color: turquoise;
  }
</style>