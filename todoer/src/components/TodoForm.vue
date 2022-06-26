<template>
    <div class="m-5">
        <form @submit.prevent="addItem(todo)">
        <div class="flex">
            <div class="mr-5">
                <input v-model="todo" type="text" placeholder="Nueva tarea" class="input input-bordered input-primary w-full max-w-xs" />
            </div>
            <div>
                <button class="btn btn-info">
                    <PlusIcon></PlusIcon>
                </button>
            </div>
        </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoListStore } from "../store/useTodoListStore";

import PlusIcon from 'vue-material-design-icons/PlusOutline.vue'

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