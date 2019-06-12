<template>
  <div class="board container-fluid">
    {{board.title}}
    {{board.description}}


    <!-- <list v-for="list in lists" :listData='list'></list> -->
    <div class="row">
      <div class="col-3">
        <!-- </listTemplate> -->
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "board",
    computed: {
      board() {
        return (
          this.$store.state.boards.find(b => b._id == this.boardId) || {
            title: "Loading..."
          }
        );
      }
    },
    props: ["boardId"]
  };
</script>