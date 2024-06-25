<template>
  <div class="container">
    <div class="left-panel">
      <img src="@/assets/signup.png" alt="Signup Image" />
    </div>
    <form class="form-container" @submit.prevent="loginForm">
      <div class="mb-3">
        <label for="email" class="form-label">이메일을 입력해 주세요</label>
        <input type="email" class="form-control" id="email" v-model="loginUser.email" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">비밀번호를 입력해 주세요</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="loginUser.password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary" style="float: right">로그인</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'

const loginUser = reactive({
  email: '',
  password: ''
})

const loginForm = () => {
  axios
    .post('http://localhost:8080/api/login', loginUser, { withCredentials: true })
    .then((result) => {
      if (result.status === 200) {
        alert('로그인 성공')
        console.log(result)
        sessionStorage.setItem('userData', JSON.stringify(result.data))
        window.location.href = '/'
      }
    })
    .catch((err) => {
      console.log(JSON.stringify(loginUser))
      console.log(err)
    })
}
</script>

<style>
.container {
  display: flex;
  justify-content: flex-end;
  height: 100vh; /* 화면의 높이에 맞추려면 설정 */
}

.form-container {
  width: 50%; /* 화면의 오른쪽 반만 사용 */
  margin-top: 100px; /* 폼을 아래로 내리는 마진 추가 */
}

.left-panel {
  margin-top: -310px; /* 위쪽으로 60px만큼 이동 */
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
}

.left-panel img {
  max-width: 80%; /* 이미지가 부모 요소 내에서 최대 크기로 유지되도록 설정 */
}
</style>
