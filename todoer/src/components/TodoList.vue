

<!-- FIXME: separar en dos componentes lista de completados/lista todo o jugar con props en un sólo componente -->
<template>
  <div class="flex-col">
    <div class="overflow-x-auto">
      <table class="table w-full">
        <tbody>
          <div v-for="todo in todoList" :key="todo.id">
            <div v-if="!todo.completed">
              <div class="group">
                <tr class="hover">
                  <td>
                    <span>{{ todo.item.toUpperCase() }}</span>
                  </td>
                  <td>
                    <div class="btn-group">
                      <button class="btn btn-accent group-hover:block hidden" @click.stop="toggleCompleted(todo.id)">
                        <CheckBoldIcon></CheckBoldIcon>
                      </button>
                      <button class="btn btn-secondary group-hover:block hidden" @click="deleteTodo(todo.id)">
                        <CloseCircleIcon></CloseCircleIcon>
                      </button>
                    </div>
                  </td>
                </tr>
              </div>
            </div>
          </div>
        </tbody>
      </table>

    </div>
    <div class="collapse">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        Tareas completadas ({{ completedCount() }})
      </div>
      <div class="collapse-content">
        <table class="table w-full">
          <tbody>
            <div v-for="todo in todoList" :key="todo.id">
              <div v-if="todo.completed">
                <div class="group">
                  <tr class="hover">
                    <td>
                      <span :class="{ completed: todo.completed }">{{ todo.item.toUpperCase() }}</span>
                    </td>
                    <td>
                      <div class="btn-group">
                        <button class="btn btn-accent group-hover:block hidden" @click.stop="toggleCompleted(todo.id)">
                          <ArrowUpIcon></ArrowUpIcon>
                        </button>
                        <button class="btn btn-secondary group-hover:block hidden" @click="deleteTodo(todo.id)">
                          <CloseCircleIcon></CloseCircleIcon>
                        </button>
                      </div>
                    </td>
                  </tr>
                </div>
              </div>
            </div>
          </tbody>
        </table>
      </div>


    </div>
  </div>

</template>

<script setup>
import { useTodoListStore } from '../store/useTodoListStore';
import { storeToRefs } from 'pinia';

import CloseCircleIcon from 'vue-material-design-icons/CloseCircle.vue'
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue'
import CheckBoldIcon from 'vue-material-design-icons/CheckBold.vue'

const store = useTodoListStore();

// para reactividad de store
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;

function completedCount() {
  return this.todoList.filter(todo => todo.completed).length;
}

</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>