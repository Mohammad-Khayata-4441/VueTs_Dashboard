<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(link, i) in BreadCrumbItems" :key="i" :href="link.path">
        <router-link :to="link.path">
          {{ link.text }}
        </router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const BreadCrumbItems = computed(() => route.meta.breadCrumb);
</script>
