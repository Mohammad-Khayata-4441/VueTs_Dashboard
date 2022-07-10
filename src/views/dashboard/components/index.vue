<template>
  <div class="tw-grid tw-grid-cols-3 tw-space-x-3">
    <div class="col">
      <a-card title="Form Example" class="tw-shadow" :bordered="false">
        <a-date-picker v-model:value="value1" />
      </a-card>
    </div>
    <div class="col">
      <a-card title="Form Example" class="tw-shadow" :bordered="false">
        <p>card content</p>
      </a-card>
    </div>
    <div class="col">
      <a-card title="Form Example" class="tw-shadow" :bordered="false">
        <p>card content</p>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value1 = ref("");
</script>
