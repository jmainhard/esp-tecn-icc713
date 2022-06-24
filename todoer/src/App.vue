<script setup>
// <!-- https://vuejs.org/api/sfc-script-setup.html -->
// para reactividad
import { ref } from 'vue'
import TodoTask from './components/TodoTask.vue'
const test = "Hello world!";
</script>

<template>
  <TodoTask :task="test"></TodoTask>
</template>

<style>
</style>
