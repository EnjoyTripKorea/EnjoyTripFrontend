<template>
  <div class="container" style="margin-top: 20px">
    <div class="col">
      <div class="row">
        <div class="col-lg-4 d-flex flex-column" v-for="place in places" :key="place.placeId">
          <div class="card mb-4 flex-grow-1">
            <a :href="'#!'"
              ><img class="card-img-top" :src="place.placeImageUrl" style="max-height: 500px"
            /></a>
            <div class="card-body d-flex flex-column">
              <div class="small text-muted">{{ place.createdDate }}</div>
              <h2 class="card-title h4">{{ place.title }}</h2>
              <p class="card-text">{{ place.content }}</p>
              <a class="btn btn-primary" :href="'#!'">더 읽어보기</a>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Pagination" style="margin-bottom: 50px">
        <hr class="my-0" />
        <ul class="pagination justify-content-center my-4">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a>
          </li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="/">1</a>
          </li>
          <li class="page-item"><a class="page-link" href="/">2</a></li>
          <li class="page-item"><a class="page-link" href="#!">3</a></li>
          <li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
          <li class="page-item"><a class="page-link" href="#!">15</a></li>
          <li class="page-item"><a class="page-link" href="#!">Older</a></li>
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
      places: [],
      currentPage: 0,
      totalPages: 0
    }
  },
  created() {
    this.fetchPlaces()
  },
  methods: {
    fetchPlaces() {
      axios
        .get(`http://localhost:8080/api/place?page=${this.currentPage}`, { withCredentials: true })
        .then((response) => {
          // Update the places array with received data
          this.places = response.data.data
          // Update total pages based on response
          this.totalPages = response.data.totalPages
          console.log(response)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  },
  watch: {
    // Watch for changes in currentPage and call fetchPlaces method when it changes
    currentPage(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchPlaces()
      }
    }
  }
}
</script>
