<template>
  <div class="List">
    <h1>{{list.title}}</h1>
    <h4>{{list.authorId}}</h4>
    <div class="card" v-for="task in tasks" :taskData='task'>
      </Task>
    </div>
  </div>

</template>



<script>
  import Tasks from '@/components/Task.vue'
  export default {
    name: 'List',
    // props: {
    //   id: id
    // },
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch('getLists', this.id)
      //need tasks??
    },
    computed: {
      lists() {
        this.$store.state.lists
      }
    }
  }
</script>

<style scoped>
</style>