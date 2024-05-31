<script setup lang="ts">
type Props = {
  size?: 'sm'
}
defineProps<Props>()
</script>

<template>
  <div :class="size === 'sm' ? 'chatbot-portrait sm' : 'chatbot-portrait'">宇知</div>
</template>
<style scoped>
.chatbot-portrait {
  background-color: #e0e6ef;
  padding: 0 0.5rem;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  border-radius: 50%;
  font-weight: bold;
  color: #133d66;
  cursor: pointer;
}

.sm {
  font-size: 1rem;
}
</style>
