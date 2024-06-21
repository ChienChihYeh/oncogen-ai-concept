<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import IconMicrophone from './icons/IconMicrophone.vue'
import IconSend from './icons/IconSend.vue'
import type { DialogType } from '@/types/Types'

const props = defineProps<{
  sendMessage: (message: string) => void
  dialogs: DialogType[]
}>()

const dialogInput = ref('')
const isListening = ref(false)
const inputElementRef = ref()
const isSumbitDisabled = ref(false)

const windowSpeechRecognition = webkitSpeechRecognition || SpeechRecognition
const recognition = new windowSpeechRecognition() || null

if (recognition) {
  recognition.continuous = false
  recognition.interimResults = false
  recognition.lang = 'zh-TW'

  recognition.onresult = async (event) => {
    isListening.value = false

    if (event.results.length > 0) {
      dialogInput.value = event.results[0][0].transcript
    }
    await nextTick()
    inputElementRef.value.focus()
  }
}

const startListening = () => {
  if (recognition) {
    recognition.start()
    isListening.value = true
  } else {
    alert('Your browser does not support the Speech API')
  }
}

const handleSubmit = () => {
  props.sendMessage(dialogInput.value)
  dialogInput.value = ''
}

watch(
  () => props.dialogs,
  () => {
    isSumbitDisabled.value = !isSumbitDisabled.value
  }
)
</script>
<template>
  <div class="dialog-footer">
    <div class="footer-border"></div>
    <form @submit.prevent="handleSubmit">
      <div class="dialog-input-container">
        <input
          type="text"
          class="dialog-input"
          v-model="dialogInput"
          :placeholder="isListening ? '語音輸入中...' : '請輸入訊息...'"
          ref="inputElementRef"
        />
        <div class="dialog-input-icon">
          <button
            v-if="dialogInput === ''"
            @click.prevent="startListening"
            :disabled="isSumbitDisabled"
          >
            <IconMicrophone />
          </button>
          <button v-else type="submit" :disabled="isSumbitDisabled">
            <IconSend />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss">
.dialog-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 7rem;
  padding: 2rem;
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
  right: 1rem;
  gap: 1rem;

  button {
    padding: 0;
    background: none;
    outline: none;
    border: none;

    &:disabled {
      opacity: 0.4;
    }
  }
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
    background-color: #fff;
  }
}
</style>
