<template>
  <div class="container" style="margin-top: 20px">
    <div class="col">
      <!-- Search Form -->
      <div class="row mb-4">
        <div class="col-lg-3">
          <select v-model="depAirportId" class="form-control">
            <option value="" disabled selected>출발 공항 선택</option>
            <option value="NAARKJB">무안</option>
            <option value="NAARKJJ">광주</option>
            <option value="NAARKJK">군산</option>
            <option value="NAARKJY">여수</option>
            <option value="NAARKNW">원주</option>
            <option value="NAARKNY">양양</option>
            <option value="NAARKPC">제주</option>
            <option value="NAARKPK">김해</option>
            <option value="NAARKPS">사천</option>
            <option value="NAARKPU">울산</option>
            <option value="NAARKSI">인천</option>
            <option value="NAARKSS">김포</option>
            <option value="NAARKTH">포항</option>
            <option value="NAARKTN">대구</option>
            <option value="NAARKTU">청주</option>
          </select>
        </div>
        <div class="col-lg-3">
          <select v-model="arrAirportId" class="form-control">
            <option value="" disabled selected>도착 공항 선택</option>
            <option value="NAARKJB">무안</option>
            <option value="NAARKJJ">광주</option>
            <option value="NAARKJK">군산</option>
            <option value="NAARKJY">여수</option>
            <option value="NAARKNW">원주</option>
            <option value="NAARKNY">양양</option>
            <option value="NAARKPC">제주</option>
            <option value="NAARKPK">김해</option>
            <option value="NAARKPS">사천</option>
            <option value="NAARKPU">울산</option>
            <option value="NAARKSI">인천</option>
            <option value="NAARKSS">김포</option>
            <option value="NAARKTH">포항</option>
            <option value="NAARKTN">대구</option>
            <option value="NAARKTU">청주</option>
          </select>
        </div>
        <div class="col-lg-3">
          <input type="date" v-model="depPlandTime" class="form-control" placeholder="출발일" />
        </div>
        <div class="col-lg-3">
          <select v-model="airlineId" class="form-control">
            <option value="" disabled selected>항공사 ID (옵션)</option>
            <option value="AAR">아시아나항공</option>
            <option value="ABL">에어부산</option>
            <option value="ASV">에어서울</option>
            <option value="ESR">이스타항공</option>
            <option value="FGW">플라이강원</option>
            <option value="HGG">하이에어</option>
            <option value="JJA">제주항공</option>
            <option value="JNA">진에어</option>
            <option value="KAL">대한항공</option>
            <option value="TWB">티웨이항공</option>
          </select>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col">
          <button class="btn btn-primary" @click="fetchPlaces">검색</button>
        </div>
      </div>
      <!-- Places List -->
      <div class="row">
        <div class="col-lg-4 d-flex flex-column" v-for="place in places" :key="place.placeId">
          <div class="card mb-4 flex-grow-1">
            <a :href="'#!'">
              <img class="card-img-top" :src="place.placeImageUrl" style="max-height: 500px" />
            </a>
            <div class="card-body d-flex flex-column">
              <div class="small text-muted">{{ place.createdDate }}</div>
              <div>
                <h2 class="card-title h4">{{ place.title }}</h2>
              </div>
              <p class="card-text">{{ place.content }}</p>
              <a class="btn btn-primary" :href="'#!'">더 읽어보기</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Pagination -->
      <nav aria-label="Pagination" style="margin-bottom: 50px">
        <hr class="my-0" />
        <ul class="pagination justify-content-center my-4">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a
              class="page-link"
              href="#"
              @click.prevent="changePage(currentPage - 1)"
              tabindex="-1"
              aria-disabled="currentPage === 1"
              >이전</a
            >
          </li>
          <li
            class="page-item"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
          >
            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a
              class="page-link"
              href="#"
              @click.prevent="changePage(currentPage + 1)"
              aria-disabled="currentPage === totalPages"
              >다음</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style>
.card-body {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit the text to 3 lines */
  -webkit-box-orient: vertical;
  height: 200px;
}

.card-img-top {
  height: 250px;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
}
</style>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      airplanes: [],
      currentPage: 1,
      totalPages: 0,
      //
      depAirportId: '',
      arrAirportId: '',
      depPlandTime: '',
      airlineId: ''
    }
  },
  created() {
    this.fetchAirplanes()
  },
  methods: {
    fetchAirplanes() {
      const params = {
        depAirportId: this.depAirportId,
        arrAirportId: this.arrAirportId,
        depPlandTime: this.depPlandTime,
        airlineId: this.airlineId,
        page: this.currentPage - 1 // Back-end expects 0-based page index
      }
      axios
        .get('http://localhost:8080/api/airplane', {
          params,
          withCredentials: true
        })
        .then((response) => {
          this.places = response.data.data
          this.totalPages = response.data.totalPages
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    },
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page
      }
    }
  },
  watch: {
    currentPage(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchPlaces()
      }
    }
  }
}
</script>
