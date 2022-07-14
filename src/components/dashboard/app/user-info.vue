<template>
  <div class="user-info">
    <img src="@/assets/images/user.jpg" />
    <div class="user-info-text">
      <h6 class="user-name tw-my-0">User Name</h6>
      <h6 class="user-position">User Position</h6>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  .user-name {
    font-size: 16px;
  }

  .user-position {
    font-size: 12px;
    color: $gray-400;
  }
}
</style>
