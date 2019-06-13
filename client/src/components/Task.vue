<template>
  <div class="Task">
    <h1>{{taskData.title}}</h1>
    <h4>{{taskData.author}}</h4>
    <p>{{taskData.description}}</p>
    <div v-for="comment in taskData.comments" :commentData='comment'>
      <p>{{comment.authorId}} : {{comment.content}}</p>
    </div>

    <form class="form" @submit.prevent="createComment" v-if="taskData._id">
      <input type="text" class="form-control" placeholder="Name" v-model="newComment.authorId" Required>
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
          authorId: '',
          content: '',
        }
      }
    },
    computed: {
      task() {
        return
      }
    },
    methods: {
      createCommment(data) {
        this.$store.dispatch('createComment', data)
      }
    }
  }
</script>



<style scoped>

</style>