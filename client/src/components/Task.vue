<template>
  <h1>{{task.title}}</h1>
  <h4>{{task.author}}</h4>
  <p>{{task.description}}</p>
  <div v-for="comment in comments" :commentData='comment'>
    <p>{{comment.authorId}} : {{comment.content}}</p>
  </div>
  <!-- form for comments here -->
  <form class="form" @submit.prevent="createComment()" v-if="task._id">
    <input type="text" class="form-control" placeholder="Name" v-model="newComment.authorId" Required>
    <input type="text" class="form-control" placeholder="Comment" v-model="newComment.content" Required> </form>
</template>
<script>
  export default {
    name: 'Task',
    Data() {
      return {

      }
    }
  }
</script>



<style scoped>

</style>