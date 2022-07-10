<template>
  <div class="dashboard-layout">
    <div class="dashboard-sidebar" ref="sidebar">
      <DashSidebar></DashSidebar>
    </div>

    <div class="dashboard-wrapper">
      <!-- Layout Navbar -->

      <div class="dashboard-navbar" ref="navbar">
        <DashNavbar></DashNavbar>
      </div>
      <!-- End Navbar -->

      <!-- Layout Bread Crump -->
      <div class="dashboard-header">
        <slot name="breadCrumb">

          <div class="breadCrumb">
            <DashBreadCrumb></DashBreadCrumb>
          </div>

        </slot>
        <slot name="actions">

        </slot>
      </div>
      <!--End Layout Bread Crump -->



      <main class="dashboard-body" :style="`margin-top:${navHeight}px`">
        <slot></slot>
      </main>



    </div>
  </div>
</template>

<script>
import DashNavbar from '@/components/dashboard/navigation/DashNavbar.vue'
import DashSidebar from '@/components/dashboard/navigation/DashSidebar.vue'
import DashBreadCrumb from '@/components/dashboard/navigation/DashBreadCrumb.vue'
export default {
  components: {
    DashNavbar,
    DashSidebar,
    DashBreadCrumb
  },
  data() {
    return {
      navHeight: 0,
      sideWidth: 0,
    };
  },


};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
$nav-height: 98px;
$sidebar-width: 280px;

.dashboard-layout {
  min-height: 100vh;
  position: relative;

  display: flex;

  .dashboard-wrapper {
    width: calc(100vw - $sidebar-width);
    margin-left: $sidebar-width;
    padding-top: $nav-height;
    position: relative;

    .dashboard-header {
      padding: 1rem 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .dashboard-body {
      padding: 0 1rem;
    }

    .dashboard-navbar {
      position: fixed;
      min-height: $nav-height;
      top: 0;
      width: calc(100% - $sidebar-width);
      right: 0px;
    }
  }


  .dashboard-sidebar {
    width: $sidebar-width;
    position: fixed;
    height: 100vh;
  }
}
</style>
