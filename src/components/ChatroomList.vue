<script setup lang="ts">
import IconArrowLeft from './icons/IconArrowLeft.vue'
import ListItem from './ListItem.vue'
import { dialogList } from '../data/dialogList'

defineProps({
  isShowList: {
    type: Boolean,
    default: true
  }
})
defineEmits<{ 'update:isShowList': [value: boolean] }>()
</script>

<template>
  <div class="list-container">
    <div class="list-header">
      <button @click="$emit('update:isShowList', !isShowList)"><IconArrowLeft /></button>
      <h3>所有對話</h3>
    </div>
    <div class="list-body">
      <ListItem
        v-for="item in dialogList"
        :key="item.title"
        :title="item.title"
        :date="item.date"
        :preview="item.preview"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-container {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  min-width: 15rem;
  max-width: 30rem;
  border-right: 1px solid #e2e9f0;
  background-color: #fafafa;
  overflow: auto;
  animation: slide-in 0.05s ease-out;
  z-index: 20;
}

.list-header {
  height: 5rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-weight: 900;
    color: #133d66;
    vertical-align: middle;
  }

  button {
    position: absolute;
    padding: 0;
    border: 0;
    background: none;
    left: 2.5rem;
  }
}

.list-body {
  width: 100%;
}

@keyframes slide-in {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: none;
  }
}

@media screen and (max-width: 768px) {
  .list-header button {
    left: 1rem;
  }
}
</style>
