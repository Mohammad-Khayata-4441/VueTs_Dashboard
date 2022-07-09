<template>
        <div class="dashboard-layout-navbar ">
                <div class="content shadow-1 ">
                        <!-- User Info And Avatar -->
                        <div class="left">

                                <user-info></user-info>
                        </div>
                        <div class="right">
                                <dashboard-app-lang-toggler></dashboard-app-lang-toggler>
                                <dashboard-app-theme-toggler></dashboard-app-theme-toggler>
                        </div>
                </div>
        </div>
</template>

<script setup lang="ts">
import UserInfo from '@/components/dashboard/app/user-info.vue'
</script>

<style scoped lang='scss'>
@import '@/assets/scss/variables';

.dashboard-layout-navbar {
        padding: 1rem 1.2rem;

        .content {
                padding: 0.5rem 1rem;
                background-color: transparentize($color: $light, $amount: 0.1);
                backdrop-filter: blur(5px);
                display: flex;
                justify-content: space-between;
                align-items: center;
        }

        .left,
        .right {
                display: flex;
                gap: 30px;
        }
}
</style>
