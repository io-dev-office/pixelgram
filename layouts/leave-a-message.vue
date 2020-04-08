<template>
  <div>
    <div class="header">
      <div class="header-logo">
        <img
          src="/logo.svg"
          alt="">
      </div>
    </div>
    <nuxt />
    <div class="footer">
      © 2020 PIXELGRAM LLC.
    </div>
  </div>
</template>

<style>
.header {
  padding: 20px;
}

.footer {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 200px;
  background-color: #000000;
  padding: 24px 20px;
  text-align: right;
  color: #fff;
  font-size: 10px;
}
</style>
