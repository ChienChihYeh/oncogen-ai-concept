<script setup lang="ts">
import DialogInput from './DialogInput.vue'
import DialogBox from './DialogBox.vue'

const mockMessage =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint ea accusantium aspernatur adipisci distinctio, deleniti odio magnam quas soluta ad? Possimus dolorem laudantium deleniti a tempora natus, distinctio iure.'

// const mockMessage = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

const suggestion = 'Hello darkness my old friend.'
</script>

<template>
  <div class="dialog-container">
    <div class="chatroom-dialogs">
      <DialogBox sender="bot" :suggestion="suggestion" :message="mockMessage" />
      <DialogBox sender="user" :message="mockMessage" />
      <DialogBox sender="bot" :suggestion="suggestion" :message="mockMessage" />
      <DialogBox sender="user" :message="mockMessage" />
      <DialogBox sender="bot" :suggestion="suggestion" :message="mockMessage" />
      <DialogBox sender="user" :message="mockMessage" />
    </div>
  </div>
  <DialogInput />
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
