<script setup>
import CloseCircleIcon from 'vue-material-design-icons/CloseCircle.vue'
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue'
import CheckBold from 'vue-material-design-icons/CheckBold.vue'

const props = defineProps(['task']);

</script>

<!-- FIXME: hacer que btn-prmary abarque botones arrow-up (con mismo background-color antes del hover) -->
<template>
  <div class="group">
    <div class="btn-group">
      <button class="btn btn-primary btn-wide">{{ task }}</button>
      <button class="btn btn-accent group-hover:block hidden">
        <ArrowUpIcon></ArrowUpIcon>
      </button>
      <button class="btn btn-secondary group-hover:block hidden">
        <CloseCircleIcon></CloseCircleIcon>
      </button>
    </div>
  </div>
</template>

<style>
</style>