<template>
  <button @click="setTheme">
    <!-- <ui-custom-icon name="brightness" size="27"></ui-custom-icon> -->
  </button>
</template>

<script>
export default {
  methods: {
    setTheme() {
      this.$store.commit("app/Toggle_App_Theme", "dark");
    },
  },
};
</script>

<style scoped lang="scss">
button {
  svg {
    font-size: 35px;
  }
}
</style>
