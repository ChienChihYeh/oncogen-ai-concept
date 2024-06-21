<script setup lang="ts">
import { ref, watch } from 'vue'
import ChatroomHeader from '../components/ChatroomHeader.vue'
import ChatroomDialog from '../components/ChatroomDialog.vue'
import ChatroomList from '../components/ChatroomList.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = localStorage.getItem('user')
const isShowList = ref(false)

if (!user) {
  router.push('home')
}

import type { DialogType } from '@/types/Types'
import { getDialog } from '../utils/chatHelper'

const dialogs = ref<DialogType[]>([])
const prevDialogs = localStorage.getItem(`${user}PrevDialogs`)

if (prevDialogs) {
  const prevDialog = JSON.parse(prevDialogs) as DialogType[]
  if (prevDialog.length > 0) {
    dialogs.value = [...dialogs.value, ...prevDialog]
  }
}

const mockDialogs = user ? getDialog(user) : []

if (dialogs.value.length === 0) {
  dialogs.value = [{ name: 'bot', text: mockDialogs[0] }]
}

function handleUserSubmit(message: string) {
  dialogs.value = [...dialogs.value, { name: 'user', text: message }]

  if (dialogs.value.length >= mockDialogs.length) return

  setTimeout(function () {
    if (dialogs?.value) {
      dialogs.value = [...dialogs.value, { name: 'bot', text: mockDialogs[dialogs.value.length] }]
    }
  }, 600)
}

function handleClearDialogs() {
  localStorage.removeItem(`${user}PrevDialogs`)
  dialogs.value = [{ name: 'bot', text: mockDialogs[0] }]
}

watch(dialogs, () => {
  localStorage.setItem(`${user}PrevDialogs`, JSON.stringify(dialogs.value))
})
</script>

<template>
  <div class="chatroom" @click="isShowList = false">
    <ChatroomHeader v-model:isShowList="isShowList" :handle-clear-dialogs="handleClearDialogs" />
    <ChatroomDialog v-if="dialogs" :dialogs="dialogs" :handle-user-submit="handleUserSubmit" />
  </div>
  <ChatroomList v-if="isShowList" v-model:isShowList="isShowList" />
</template>

<style>
.chatroom {
  min-height: 100dvh;
  position: relative;
  background-color: #fff;
  padding-bottom: 6rem;
  width: 100vw;
}

.dialog-container {
  height: calc(100dvh - 11rem);
  width: 100%;
  overflow: auto;
  scrollbar-gutter: stable;
}
</style>
