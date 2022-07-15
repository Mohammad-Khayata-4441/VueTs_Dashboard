<template>
  <div class="dashboard-header">
    <h2 class=" text-xl  font-bold  text-gray-700">{{ $route.name }}</h2>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.dashboard-header {
  background-color: $light;
  padding: 1rem;
  border-bottom: 1px solid $gray-300;
}
</style>
