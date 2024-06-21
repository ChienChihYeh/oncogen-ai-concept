<script setup lang="ts">
import IconArrowRight from './icons/IconArrowRight.vue'
import DialogOptions from './DialogOptions.vue'
import { getUserPortraitPath } from '../utils/chatHelper'
type Props = {
  sender: 'user' | 'bot'
  message: string
  suggestion?: string
}

const user = localStorage.getItem('user') || ''

const portraitPath = getUserPortraitPath(user)

defineProps<Props>()
</script>

<template>
  <div :class="sender === 'user' ? 'dialog-box user-message' : 'dialog-box'">
    <div class="user-avatar">
      <img v-if="sender === 'user'" :src="portraitPath" alt="user" />
      <span v-else>宇知</span>
    </div>
    <div :class="sender === 'user' ? 'dialog-content user' : 'dialog-content bot'">
      {{ message }}
    </div>
  </div>
  <DialogOptions v-if="sender === 'bot'" />
  <div v-if="suggestion" class="dialog-suggestion">
    {{ suggestion }}
    <div class="dialog-suggestion-icon">
      <IconArrowRight />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dialog-box {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.user-message {
  flex-direction: row-reverse;
  margin-bottom: 2rem;
}

.dialog-content {
  width: max-content;
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-word;
}

.bot {
  max-width: calc(100% - 8rem);
  background-color: #133d66;
  color: #fff;
}

.user {
  max-width: 60%;
  background: #e2e9f0;
}

.user-avatar {
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #e0e6ef;
  overflow: hidden;
  display: flex;
  place-items: center;

  img {
    width: 100%;
  }

  span {
    color: #133d66;
    margin: auto;
    font-weight: 900;
    font-size: 1rem;
  }
}

.dialog-suggestion {
  border: #133d66;
  max-width: calc(100% - 8rem);
  width: max-content;
  text-wrap: nowrap;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0.75rem;
  padding-right: 3rem;
  border-radius: 5rem;
  border: 1px solid #133d66;
  margin-left: 4rem;
  margin-bottom: 2rem;
  position: relative;

  &:hover {
    background-color: #f5f5f5;
  }
}

.dialog-suggestion-icon {
  position: absolute;
  right: 0.75rem;
  top: 0.6rem;

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .dialog-box {
    gap: 0.75rem;
  }

  .bot {
    max-width: calc(100% - 7.5rem);
  }
}
</style>
