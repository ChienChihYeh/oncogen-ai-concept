<script setup lang="ts">
import { ref } from 'vue'
import IconRefresh from './icons/IconRefresh.vue'
import IconShare from './icons/IconShare.vue'
import IconThumbUp from './icons/IconThumbUp.vue'
import IconThumbDown from './icons/IconThumbDown.vue'

const thumbRef = ref('')
</script>

<template>
  <div class="dialog-options">
    <div class="option-group"><IconRefresh /><IconShare /></div>
    <div class="option-group">
      <div
        :class="thumbRef === 'up' ? 'svg-border selected' : 'svg-border'"
        @click="thumbRef = 'up'"
      >
        <IconThumbUp />
      </div>
      <div
        :class="thumbRef === 'down' ? 'svg-border selected' : 'svg-border'"
        @click="thumbRef = 'down'"
      >
        <IconThumbDown />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dialog-options {
  width: max-content;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.75rem;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.option-group {
  display: flex;
  gap: 1rem;
}

.svg-border {
  width: 2rem;
  height: 2rem;
  border: 1px solid #a2bfdc;
  border-radius: 50%;
  display: flex;
  place-items: center;
  place-content: center;

  &:hover {
    background-color: #f5f5f5;
  }
}

.selected {
  border: 1px solid #133d66;
}
</style>
