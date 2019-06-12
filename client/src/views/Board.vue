<template>
  <div class="board container-fluid">
    <header>
      <form class="new-list" @submit.prevent="createNewList(list)">
        <input type="text" class="form-control" placeholder="list name" v-model="newList.authorId" Required>
        <input type="text" class="form-control" placeholder="description" v-model="newList.content" Required>
        <button type="submit">Create List</button>
      </form>
    </header>

    <!-- https://bootswatch.com/lux/?optionsRadios=option1 -->

    <div>
      {{board.title}}
      {{board.description}}
      {{board.id}}
    </div>
    <div v-for="list in lists" :listData='list' v-if="board._id">
      </Lists>
    </div>
  </div>
</template>

<script>
  import List from '@/components/List.vue'

  export default {
    name: "board",
    components: {
      List
    },
    computed: {
      board() {
        return (
          this.$store.state.boards.find(b => b._id == this.boardId) || {
            title: "Loading...",
          },
        );
      },
      lists() { //not 100% sure this is right, will have to connect
        return this.$store.state.lists.find(b => b._id == this.boardId);  //this look like above?
      },
    },
    props: ["boardId"],
    methods: {
      createNewList(data) {
        this.$store.dispatch('createNewList', data)
      }
    }


  };
</script>