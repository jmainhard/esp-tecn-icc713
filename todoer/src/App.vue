<template>
  <div class="flex justify-center">
    <div class="flex-col">
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </div>
  </div>

  <!-- Tareas completadas -->
  <!-- <div class="collapse">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium">
      Tareas completadas
    </div>
    <div class="collapse-content">

    </div>

  </div> -->

</template>

<script setup>
// <!-- https://vuejs.org/api/sfc-script-setup.html -->
// para reactividad
import { ref } from 'vue'
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'
</script>

<style>
</style>
