<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light" style="height: 80px">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">EnjoyTrip</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <form class="d-flex" role="search" style="margin-left: 400px" @submit.prevent="search">
              <input
                v-model="searchWord"
                class="form-control me-2"
                type="search"
                placeholder="도시나 상품을 검색해보세요"
                aria-label="Search"
                style="width: 250px"
              />
              <button class="btn btn-light" type="submit">🔍</button>
            </form>
            <li class="nav-item" v-if="!isLoggedIn">
              <a class="nav-link active" aria-current="page" href="/SignUp">회원가입</a>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <a class="nav-link active" aria-current="page" href="/Login">로그인</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/Notice">공지사항</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/KakaoMap">카카오맵</a>
            </li>
            <li class="nav-item" id="mypageNav" v-if="isLoggedIn">
              <a class="nav-link active" aria-current="page" @click="logout">
                <div>
                  <img src="@/assets/user.png" style="width: 40px; height: 35px" />
                  로그아웃
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg bg-light" style="height: 80px">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/hotel"
                ><img src="@/assets/hotel.png" style="width: 40px; height: auto" /> 호텔</a
              >
            </li>
            <li class="nav-item" style="margin-left: 70px">
              <a class="nav-link active" aria-current="page" href="/car"
                ><img src="@/assets/car.png" style="width: 40px; height: auto" /> 렌트카</a
              >
            </li>
            <li class="nav-item" style="margin-left: 70px">
              <a class="nav-link active" aria-current="page" href="/Airplane"
                ><img src="@/assets/airplane.png" style="width: 40px; height: auto" /> 항공편</a
              >
            </li>

            <li class="nav-item" style="margin-left: 70px">
              <a class="nav-link active" aria-current="page" href="/insurance"
                ><img src="@/assets/insurance.png" style="width: 40px; height: auto" /> 보험</a
              >
            </li>
            <li class="nav-item" style="margin-left: 70px">
              <a class="nav-link active" aria-current="page" href="/golf"
                ><img src="@/assets/golf.png" style="width: 40px; height: auto" /> 골프</a
              >
            </li>
            <li class="nav-item" style="margin-left: 70px">
              <a class="nav-link active" aria-current="page" href="/camping"
                ><img src="@/assets/camping.png" style="width: 40px; height: auto" /> 캠핑</a
              >
            </li>
            <li class="nav-item" style="margin-left: 70px">
              <a class="nav-link active" aria-current="page" href="/food"
                ><img src="@/assets/food.png" style="width: 40px; height: auto" /> 맛집</a
              >
            </li>
            <li class="nav-item" style="margin-left: 70px">
              <a class="nav-link active" aria-current="page" href="/festival"
                ><img src="@/assets/festival.png" style="width: 40px; height: auto" /> 페스티벌</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const searchWord = ref('') // Initialize searchWord variable
const isLoggedIn = ref(false)

onMounted(() => {
  const storedData = sessionStorage.getItem('userData')
  if (storedData !== null) {
    isLoggedIn.value = true
  }
})

const logout = () => {
  sessionStorage.removeItem('userData')
  isLoggedIn.value = false
  window.location.href = '/'
}
const search = () => {
  const PlaceSearchwordRequestDto = {
    searchWord: searchWord.value
  }

  axios
    .post('http://localhost:8080/api/place/searchword', PlaceSearchwordRequestDto, {
      withCredentials: true
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error('Error searching:', error)
    })
}
</script>

<style></style>
