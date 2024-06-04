<script setup lang="ts">
import DialogInput from './DialogInput.vue'
import DialogBox from './DialogBox.vue'

const mockMessage =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint ea accusantium aspernatur adipisci distinctio, deleniti odio magnam quas soluta ad? Possimus dolorem laudantium deleniti a tempora natus, distinctio iure.'
</script>

<template>
  <div class="chatroom-dialogs">
    <DialogBox sender="bot" suggestion="Hello" :message="mockMessage" />
    <DialogBox sender="user" :message="mockMessage" />
    <DialogBox sender="bot" suggestion="Hello" :message="mockMessage" />
    <DialogBox sender="user" :message="mockMessage" />
    <DialogBox sender="bot" suggestion="Hello" :message="mockMessage" />
    <DialogBox sender="user" :message="mockMessage" />
  </div>
  <DialogInput />
</template>
<style scoped>
.chatroom-dialogs {
  width: 100%;
  max-width: 1024px;
  margin: auto;
  padding: 2rem 0.75rem 6rem;
}
</style>
