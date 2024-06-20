<script setup lang="ts">
import { useRouter } from 'vue-router'
import IconCdss from './icons/IconCdss.vue'
import { ref } from 'vue'
const router = useRouter()
const userName = ref('')
const userList = ['doctor', 'patient', 'nurse']

function handleLogin(e: Event) {
  e.preventDefault()
  if (userList.includes(userName.value)) {
    localStorage.setItem('user', userName.value)
    router.push('chatroom')
  } else {
    alert('無效的帳號密碼!')
  }
}
</script>

<template>
  <div class="card">
    <IconCdss />
    <h1>
      肺癌智慧多模<span><br /></span>決策分享系統
    </h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="用戶名稱"
            required
            v-model="userName"
          />
        </div>
        <div>
          <input type="password" id="password" name="password" placeholder="密碼" required />
        </div>
        <button type="submit">登入</button>
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss">
.card {
  text-align: center;
}

.form-group {
  width: fit-content;
  margin: auto;
}

input {
  border: 0.0625rem solid #7995b2;
  border-radius: 0.5rem;
  background-color: #305a7e;
  padding: 0.5rem 0.625rem;
  padding-top: 0.625rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #dfecfa;
  outline: none;

  &:focus {
    border: 0.0625rem solid #9ab5d3;
  }

  &::placeholder {
    color: #cbdbec;
    font-size: 1rem;
  }
}

button {
  margin-top: 1rem;
  width: 100%;
  height: 2.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: 2rem;
  border: none;
  background: #fff;
  color: #043340;
}

h1 {
  color: #fff;
  line-height: 2.125rem;
  font-size: 1.375rem;
  font-weight: 700;
  margin: 2rem 0;
}

@media (min-width: 768px) {
  h1 {
    font-size: 1.75rem;
  }
  span {
    display: none;
  }
}
</style>
