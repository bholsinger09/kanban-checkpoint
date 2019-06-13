<template>
  <div class="Task">
    <h3>{{taskData.title}}
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Move</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>

    </h3>
    <!-- <h5>{{taskData.author}}</h5> -->
    <p>{{taskData.description}}</p>
    <div v-for="comment in taskData.comments" :commentData='comment'>
      <p>{{comment.authorId}} : {{comment.content}} <button class="btn-sm" v-if="comment._id"
          @click="deleteComment(comment._id)">Delete</button></p>
    </div>

    <form class="form" @submit.prevent="createComment" v-if="taskData._id">
      <input type="text" class="form-control" placeholder="Comment" v-model="newComment.content" Required>
      <button type="submit">add comment</button>
    </form>
    <button @click="deleteTask">Delete Task</button>
  </div>
</template>


<script>
  export default {
    name: 'Task',
    props: ['taskData'],
    data() {
      return {
        newComment: {
          content: '',
          authorId: this.taskData.authorId
        }
      }
    },
    methods: {
      createComment() {
        this.taskData.comments.push(this.newComment)
        this.$store.dispatch('updateTask', this.taskData)
      },//createComment
      deleteComment(id) {
        let index = this.taskData.comments.findIndex(comment => {
          return comment._id == id
        })
        this.taskData.comments.splice(index, 1)
        this.$store.dispatch('updateTask', this.taskData)
        console.log('deleting comment')
      }, //deleteComment
      deleteTask() {
        this.$store.dispatch("deleteTask", this.taskData)
        console.log('deleting task')
      }, // deleteTask
      moveTask() {
        this.$store.dispatch("moveTask", this.taskData)
        console.log('do a barrel roll')
      }, //moveTask
    } //methods
  }
</script>



<style scoped>
  .Task {
    background-color: #773535;
    color: whitesmoke;

  }
</style>