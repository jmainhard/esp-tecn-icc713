

<!-- FIXME: hacer que btn-prmary abarque botones arrow-up  y close-circle(con mismo background-color antes del hover) -->
<template>
<!-- <div class="overflow-x-auto">
  <table class="table w-full">
    <tbody>

    </tbody>
  </table>
</div> -->
<div v-for="todo in todoList" :key="todo.id">
  <div>
    <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
    <div>
      <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
      <span @click="deleteTodo(todo.id)">&#10060;</span>
    </div>
  </div>
</div>
</template>

<script setup>
import { useTodoListStore } from '../store/useTodoListStore';
import { storeToRefs } from 'pinia';

import CloseCircleIcon from 'vue-material-design-icons/CloseCircle.vue'
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue'
import CheckBold from 'vue-material-design-icons/CheckBold.vue'

const store = useTodoListStore();

// para reactividad de store
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;

</script>

<style>
span {
  margin: 0 10px;
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
}
</style>