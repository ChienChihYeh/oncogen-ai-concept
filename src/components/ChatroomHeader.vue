<script setup lang="ts">
import IconReturn from './icons/IconReturn.vue'
import IconClear from './icons/IconClear.vue'
import IconDialogs from './icons/IconDialogs.vue'
import ChatbotPortrait from './ChatbotPortrait.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="chatroom-header">
    <div class="chatroom-section">
      <RouterLink to="/"><IconReturn /></RouterLink>
    </div>
    <div class="chatroom-section flex-center">
      <ChatbotPortrait />
    </div>
    <div class="chatroom-section flex-end flex-gap">
      <IconClear />
      <IconDialogs />
    </div>
  </div>
</template>
<style scoped>
.chatroom-header {
  border-bottom: 1px solid #ccc;
  height: 5rem;
  display: flex;
  padding: 0 2.5rem;
}

.chatroom-section {
  flex: 1;
  display: flex;
  align-items: center;
}

.flex-center {
  justify-content: center;
}

.flex-end {
  justify-content: flex-end;
}

.flex-gap {
  gap: 1.5rem;
}

svg {
  cursor: pointer;
}
</style>
