<script setup lang="ts">
type Props = {
  title: string
  date: string
  preview: string
}

defineProps<Props>()
</script>

<template>
  <div class="list-item">
    <div class="avatar">宇知</div>
    <div class="content">
      <div class="header">
        <h3>{{ title }}</h3>
        <p>{{ date }}</p>
      </div>
      <p>{{ preview }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-item {
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  gap: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  p {
    font-size: 0.8rem;
    color: #777;
  }
}

h3 {
  font-weight: 900;
}

p {
  color: #133d66;
}

.avatar {
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #e0e6ef;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #133d66;
  font-weight: 900;
}
</style>
