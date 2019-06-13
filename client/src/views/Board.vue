<template>
  <div class="board container-fluid">
    <header>
      <form class="new-list" @submit.prevent="createList">
        <input type="text" class="form-control" placeholder="list title" v-model="newList.title" Required>
        <input type="text" class="form-control" placeholder="description" v-model="newList.description" Required>
        <button type="submit">Create List</button>
      </form>
    </header>
    <div>
      <h2>{{board.title}}</h2>
      <h4>{{board.description}}</h4>
      {{board.id}}
    </div>
    <list v-for="list in lists" :listData='list' v-if="board._id" />
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