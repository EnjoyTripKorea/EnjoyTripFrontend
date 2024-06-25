<template>
  <div class="container">
    <div class="left-panel">
      <img src="@/assets/signup.png" alt="Signup Image" />
    </div>
    <form class="form-container" @submit.prevent="joinForm">
      <div class="mb-3">
        <label for="email" class="form-label">이메일을 입력해 주세요</label>
        <input type="email" class="form-control" id="email" v-model="joinUser.email" required />
      </div>
      <div class="mb-3">
        <label for="username" class="form-label">사용자님 이름을 입력해 주세요</label>
        <input
          type="username"
          class="form-control"
          id="username"
          v-model="joinUser.username"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">비밀번호를 입력해 주세요</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="joinUser.password"
          required
        />
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">나이를 입력해 주세요</label>
        <input type="number" class="form-control" id="age" v-model="joinUser.age" required />
      </div>

      <div class="mb-3">
        <label for="phoneNumber" class="form-label">휴대번호를 입력해 주세요</label>
        <input
          type="tel"
          class="form-control"
          id="phoneNumber"
          v-model="joinUser.phoneNumber"
          required
        />
      </div>
      <div class="mb-3">
        <label for="gender" class="form-label">성별을 입력해 주세요</label>
        <select class="form-select" id="gender" v-model="joinUser.gender" required>
          <option value="MAN">남자</option>
          <option value="WOMAN">여자</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" style="float: right">회원가입</button>
    </form>
  </div>
</template>
<style>
.container {
  display: flex;
  justify-content: flex-end;
  height: 100vh; /* 화면의 높이에 맞추려면 설정 */
}

.form-container {
  width: 50%; /* 화면의 오른쪽 반만 사용 */
  margin-top: 60px; /* 폼을 아래로 내리는 마진 추가 */
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
  margin-top: 60px;
}
</style>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'

const joinUser = reactive({
  email: '',
  username: '',
  password: '',
  age: '',
  gender: '',
  phoneNumber: ''
})

const joinForm = () => {
  axios
    .post('http://localhost:8080/api/signUp', joinUser)
    .then((result) => {
      if (result.status === 201) {
        alert('회원 가입 성공')
      }
    })
    .catch((err) => {
      console.log(JSON.stringify(joinUser))
      console.log(err)
    })
}
</script>
