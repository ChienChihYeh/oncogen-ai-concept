<script setup lang="ts">
import DialogInput from './DialogInput.vue'
</script>

<template>
  <div class="chatroom-dialogs">
    <h2>Dialogs</h2>
  </div>
  <DialogInput />
</template>
<style scoped>
.chatroom-dialogs {
  width: 100%;
  max-width: 1024px;
  margin: auto;
  padding: 0.75rem;
  background-color: #ccc;
}
</style>
