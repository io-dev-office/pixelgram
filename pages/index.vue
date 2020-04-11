<template>
  <div class="fullscreenCenter">
    <div class="fullscreenCenter-inner">
      <div class="logo">
        <img
          src="/logo.svg"
          alt="">
      </div>
      <p class="text">つくることで「 」を変えていく。</p>
    </div>
  </div>
</template>

<style lang="scss">
  .fullscreenCenter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    &-inner {
      text-align: center;
    }
  }
  .text {
    margin-top: 32px;
    font-weight: 900;
  }
</style>
