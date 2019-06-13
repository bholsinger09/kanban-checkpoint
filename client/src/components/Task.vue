<template>
  <div class="Task">
    <h1>{{taskData.title}}</h1>
    <h4>{{taskData.author}}</h4>
    <p>{{taskData.description}}</p>
    <div v-for="comment in taskData.comments" :commentData='comment'>
      <p>{{comment.authorId}} : {{comment.content}}</p>
    </div>

    <form class="form" @submit.prevent="createComment" v-if="taskData._id">
      <input type="text" class="form-control" placeholder="Comment" v-model="newComment.content" Required>
      <button type="submit">add comment</button>
    </form>
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
        this.$store.dispatch('createComment', this.taskData)
      }
    }
  }
</script>



<style scoped>

</style>