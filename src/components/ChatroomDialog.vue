<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import DialogInput from './DialogInput.vue'
import DialogBox from './DialogBox.vue'
import type { DialogType } from '@/types/Types'

const props = defineProps<{
  dialogs: DialogType[]
  handleUserSubmit: (message: string) => void
}>()

const bottomElement = ref()

watch(
  () => props.dialogs,
  async () => {
    await nextTick()
    bottomElement.value.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }
)
</script>

<template>
  <div class="dialog-container">
    <div class="chatroom-dialogs">
      <DialogBox
        v-for="(dialog, index) in dialogs"
        :key="index"
        :sender="dialog.name"
        :message="dialog.text"
        :suggestion="dialog.suggestions"
      />
    </div>
    <div ref="bottomElement"></div>
  </div>
  <DialogInput :send-message="handleUserSubmit" :dialogs="dialogs" />
</template>
<style scoped>
.chatroom-dialogs {
  width: 100%;
  max-width: 1024px;
  margin: auto;
  padding: 0 2rem;
  padding-top: 1rem;
  overflow: auto;
}
</style>
