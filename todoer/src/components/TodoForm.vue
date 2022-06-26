<template>
    <div class="m-5">
        <form @submit.prevent="addItem(todo)">
            <input v-model="todo" type="text" placeholder="Nueva tarea" class="input input-bordered input-primary w-full max-w-xs" />
            <button>Add</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoListStore } from "../store/useTodoListStore";

const todo = ref("");
const store = useTodoListStore();


function addItem(item) {
    if (item.length === 0) {
        return
    }
    store.addTodo(item);
    todo.value = '';
}
</script>

<style>
</style>