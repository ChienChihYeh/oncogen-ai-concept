<script setup lang="ts">
import { ref } from 'vue'
import IconMicrophone from './icons/IconMicrophone.vue'
import IconSend from './icons/IconSend.vue'

const dialogInput = ref('')
</script>
<template>
  <div class="dialog-footer">
    <div class="footer-border"></div>
    <div class="dialog-input-container">
      <input type="text" class="dialog-input" v-model="dialogInput" placeholder="請輸入訊息..." />
      <div class="dialog-input-icon">
        <IconMicrophone v-if="dialogInput === ''" />
        <IconSend v-else />
      </div>
    </div>
  </div>
</template>
<style scoped>
.dialog-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 7rem;
  padding: 2rem;
  background-color: #fff;
}

.dialog-input-container {
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-input {
  margin: 0;
  border: none;
  outline: none;
  /* background-color: #e8eff5; */
  background-color: #e2e9f0;
  width: 100%;
  padding: 1rem;
  padding-right: 3.5rem;
  border-radius: 5rem;
  font-size: 1rem;
  color: #133d66;
}

.dialog-input-icon {
  position: absolute;
  display: flex;
  right: 1.5rem;
  gap: 1rem;
}

@media screen and (max-width: 768px) {
  .dialog-footer {
    padding: 0;
    overflow: hidden;
  }

  .dialog-input-container {
    padding: 0 2rem;
  }

  .dialog-input-icon {
    position: absolute;
    right: 3rem;
  }

  .footer-border {
    width: calc(100% + 2px);
    height: 2rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border: 1px solid #adadad;
    border-bottom: none;
    transform: translateX(-1px);
  }
}
</style>
