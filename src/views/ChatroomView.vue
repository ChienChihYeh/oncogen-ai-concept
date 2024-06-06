<script setup lang="ts">
import { ref } from 'vue'
import ChatroomHeader from '../components/ChatroomHeader.vue'
import ChatroomDialog from '../components/ChatroomDialog.vue'
import ChatroomList from '../components/ChatroomList.vue'
const isShowList = ref(false)
</script>

<template>
  <div class="chatroom" @click="isShowList = false">
    <ChatroomHeader v-model:isShowList="isShowList" />
    <ChatroomDialog />
  </div>
  <ChatroomList v-if="isShowList" v-model:isShowList="isShowList" />
</template>

<style>
.chatroom {
  min-height: 100dvh;
  position: relative;
  background-color: #fff;
  padding-bottom: 6rem;
}

.dialog-container {
  height: calc(100dvh - 11rem);
  overflow: auto;
}
</style>
