<script setup lang="ts">
import IconReturn from './icons/IconReturn.vue'
import IconClear from './icons/IconClear.vue'
import IconDialogs from './icons/IconDialogs.vue'
import ChatbotPortrait from './ChatbotPortrait.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps<{ isShowList: boolean; handleClearDialogs: () => void }>()
defineEmits<{ 'update:isShowList': [value: boolean] }>()

function logoutUser() {
  localStorage.removeItem('user')
  router.push('home')
}
</script>
<template>
  <div class="chatroom-header">
    <div class="chatroom-section flex-gap">
      <div @click.stop="$emit('update:isShowList', !isShowList)"><IconDialogs /></div>
      <div @click.stop="handleClearDialogs">
        <IconClear />
      </div>
    </div>
    <div class="chatroom-section flex-center">
      <ChatbotPortrait />
    </div>
    <div class="chatroom-section flex-end" @click.stop="logoutUser">
      <IconReturn />
    </div>
  </div>
</template>
<style scoped>
.chatroom-header {
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ccc;
  height: 5rem;
  display: flex;
  padding: 0 2.5rem;
  background-color: #fff;
  z-index: 10;
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
  width: 1.5rem;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  .chatroom-header {
    padding: 0 1rem;
  }
}
</style>
