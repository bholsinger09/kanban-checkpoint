<template>
  <div class="Task">
    <h1>{{task.title}}</h1>
    <h4>{{task.author}}</h4>
    <p>{{task.description}}</p>
    <div v-for="comment in comments" :commentData='comment'>
      <p>{{comment.authorId}} : {{comment.content}}</p>
    </div>

    <form class="form" @submit.prevent="createComment(task)" v-if="task._id">
      <input type="text" class="form-control" placeholder="Name" v-model="newComment.authorId" Required>
      <input type="text" class="form-control" placeholder="Comment" v-model="newComment.content" Required>
      <button type="submit">add comment</button>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'Task',
    data() {
      return {
        newComment: {
          authorId: '',
          content: '',
        }
      }
    },
    mounted() {
      this.$store.dispatch("getTasks")
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