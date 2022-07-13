<template>
  <ul class="groups-list">
    <li class="group-item" v-for="(group, key) in NavigationLinks" :key="key">
      <small>{{ key }}</small>
      <ul class="links-list">
        <router-link v-for="(link, j) in group" :key="j" :to="link.path" v-slot="{ isActive }">
          <li class="link-item" :class="{ active: isActive }">
            <f-icon class="link-item-icon" :icon="link.icon" height="16"></f-icon>
            <span class="link-item-text" :class="{ hidden: isMiniSized }">
              {{ link.title }}
            </span>
          </li>
        </router-link>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { NavLinks } from "@/router/navigation";
import { ref } from "vue";
let NavigationLinks = ref(NavLinks);
defineProps({
  isMiniSized: Boolean,
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

// All Navlinks Groups
.groups-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  // Each Navlinks Group
  .group-item {
    small {
      font-size: 10px;
    }

    // Navlinks List
    .links-list {
      .link-item {
        font-size: 14px;
        border-radius: 1rem;
        margin: 10px 0;
        padding: 1rem 0.6rem;
        display: flex;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        color: $gray-400;
        position: relative;
        transition: 0.3s;

        &-text {
          display: block;
          opacity: 1;
          transition: 0.3s;
          transform: translateX(0px);

          &.hidden {
            transform: translateX(50px);
            opacity: 0;
          }
        }

        svg {
          color: $gray-400;
        }

        &:hover:not(.active) {
          transform: translateX(10px);
        }

        &::before {
          content: "";
          left: -16px;
          position: absolute;
          width: 8px;
          height: 45px;
          border-radius: 0 0.5rem 0.5rem 0;
          background-color: $primary;
          transition: 0.5s;
          opacity: 0;
          visibility: hidden;
          transition: translateX(-50px);
        }

        &.active {
          color: $primary;

          svg {
            color: $primary;
          }

          &::before {
            content: "";
            left: -16px;
            position: absolute;
            width: 8px;
            height: 45px;
            border-radius: 0 0.5rem 0.5rem 0;
            background-color: $primary;
            transition: 0.5s;
            opacity: 1;
            visibility: visible;
          }
        }
      }
    }
  }
}
</style>
