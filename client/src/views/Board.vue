<template>
  <div class="board container-fluid">
    <header class="row">
      <form class="new-list" @submit.prevent="createList">
        <input type="text" class="form-control col-5" placeholder="list title" v-model="newList.title" Required>
        <input type="text" class="form-control col-5" placeholder="description" v-model="newList.description" Required>
        <button type="submit" class="col-2">Create List</button>
      </form>
    </header>
    <div>
      <h2>{{board.title}}</h2>
      <h4>{{board.description}}</h4>
      <!--{{board.id}} ***-->
    </div>
    <div class="row">
      <list class="col-3" v-for="list in lists" :listData='list' v-if="board._id" />
    </div>
  </div>
</template>

<script>
  import List from '@/components/List.vue'

  export default {
    name: "board",
    props: ["boardId"],
    data() {
      return {
        newList: {
          title: '',
          description: '',
          boardId: this.boardId
        }
      }
    },
    mounted() {
      //dispatch to get board by id
      this.$store.dispatch('getLists', this.boardId)
    },
    components: {
      List
    },
    computed: {
      board() {
        return this.$store.state.boards.find(b => b._id == this.boardId) || {
          title: "Loading...",
        }
      },
      lists() {
        return this.$store.state.lists;  //this look like above?
      },
    },
    methods: {
      createList() {
        this.$store.dispatch('createList', this.newList)
      }
    }
  };
</script>

<style>
  .list-look {
    background-color: #1b1b1b;
    color: #a300a3;

  }

  .list-look h1 {
    color: red;
  }

  .list-look h1 {
    color: rgb(255, 255, 255);
  }
</style>