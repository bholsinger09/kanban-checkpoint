<template>
  <h1>{{list.title}}</h1>
  {{list.authorId}}
  <div class="card" v-for="task in tasks" :taskData='task'>
    <!-- </taskTemplate -->
  </div>
  <!-- form for task here -->
</template>

<script>
  export default {
    name: 'List'
  }
</script>

<style scoped>
</style>