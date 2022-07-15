<template>
  <div class=" grid  grid-cols-3  space-x-3">
    <div class="col">
      <a-card title="Form Example" class=" shadow" :bordered="false">
        <a-date-picker v-model:value="value1" />
        <a-slider v-model:value="value2" range />
        {{ value2 }}
      </a-card>
    </div>
    <div class="col">
      <a-card title="Form Example" class=" shadow" :bordered="false">
        <p>card content</p>
      </a-card>
    </div>
    <div class="col">
      <a-card title="Form Example" class=" shadow" :bordered="false">
        <p>card content</p>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value1 = ref("");
const value2 = ref<[number, number]>([20, 50]);
const value3 = ref("");
const value4 = ref("");
</script>
