<script setup lang="ts">
import LoginCard from '../components/LoginCard.vue'
</script>

<template>
  <div class="login-bg">
    <LoginCard />
  </div>
</template>

<style scoped>
.login-bg {
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(91.81% 74.7% at 50% -7.58%, #296488 0%, #133d66 100%);
}
</style>
