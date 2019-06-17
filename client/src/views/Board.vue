<template>
  <div class="board container-fluid">
    <div class="row">
      <div class="form-group">
        <form class="listCreator" @submit.prevent="createList">
          <input type="text" class="form-control " placeholder="list title" v-model="newList.title" Required>
          <button type="submit" class="btn btn-secondary createButton rounded">Create List</button>
        </form>
      </div>

    </div>
    <div class="row">
      <div class="col-12">
        <h2>{{board.title}}</h2>
        <h4>{{board.description}}</h4>
      </div>

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
        return this.$store.state.lists;
      },
    },
    methods: {
      createList() {
        this.$store.dispatch('createList', this.newList)
        this.newList = { title: "" };

      }
    }
  };
</script>

<style scoped>
  .createButton {
    margin-left: 3rem;
  }

  .form-group {
    justify-content: center;
    margin-left: 30%;
  }

  .form-control {
    background-color: #700000b7;
    color: #0000ff;
  }

  .form-control:active {
    background-color: #700000b7;
  }

  button {
    color: #ae00ff;
    background-color: #0000ff25;
    font-weight: bold;
    /* border: #ae00ffd7 5px solid; */
  }

  button:active {
    background-color: #0000ff;
  }

  button:hover {
    background-color: #ae00ffd7;
  }
</style>