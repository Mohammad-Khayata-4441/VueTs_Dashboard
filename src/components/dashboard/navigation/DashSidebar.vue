<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <AppInfo></AppInfo>
    </div>
    <div class="sidebar-body">
      <SidebarMenu :isMiniSized="isMiniSized"></SidebarMenu>
    </div>
    <hr />
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from "./SidebarMenu.vue";
import AppInfo from "../app/app-info.vue";
import { ref, computed } from 'vue'
const isMiniSized = ref(false);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.sidebar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: $light;
  box-shadow: 0 0 10px -5px $dark;

  &-header {
    align-content: stretch;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
  }

  &-body {
    flex: 1 1 auto;
    overflow-y: auto;
    min-height: 0px;
    padding: 1rem;

    &::-webkit-scrollbar {
      background-color: transparent;
      position: absolute;
      z-index: -1;
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $primary;
      opacity: 0.5;
      border-radius: 15px;
    }
  }

  &-footer {
    button {
      padding: 0.5rem 1rem;
      color: $gray-400;

      svg {
        margin-right: 15px;
      }
    }
  }
}

.sidebar-miniSized {}

.dark-theme {
  .sidebar {
    background-color: $dark-1;
  }
}
</style>
