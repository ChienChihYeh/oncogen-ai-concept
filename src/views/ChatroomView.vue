<script setup lang="ts">
import ChatroomHeader from '../components/ChatroomHeader.vue'
import ChatroomDialog from '../components/ChatroomDialog.vue'
</script>

<template>
  <div class="chatroom">
    <ChatroomHeader />
    <ChatroomDialog />
  </div>
</template>

<style>
.chatroom {
  min-height: 100dvh;
}
</style>
