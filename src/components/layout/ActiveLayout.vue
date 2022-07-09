<template>
   <!-- The App Will Render Here -->
   <component :is="activeComponent">
      <slot></slot>
   </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/stores/App';
import { storeToRefs } from 'pinia';
import Dashboard from '@/components/layout/layouts/Dashboard.vue';
import FullScreen from '@/components/layout/layouts/FullScreen.vue';
import Normal from '@/components/layout/layouts/Normal.vue';
import { Layouts } from '@/models/enums';
const AppStore = useAppStore();

// LAYOUTS COMPONENTS
const components = {
   Dashboard,
   FullScreen,
   Normal,
}

// GETTERS AND COMPUTED DATA
const { activeLayout } = storeToRefs(useAppStore());
const activeComponent = computed(() => components[activeLayout.value]);

// METHODS
const updateLayout = () => { AppStore.setLayout(Layouts.Dashboard) };
activeLayout.value = Layouts.FullScreen;


updateLayout()
</script>
