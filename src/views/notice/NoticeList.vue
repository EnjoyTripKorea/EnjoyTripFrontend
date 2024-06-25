<template>
  <div>
    <div class="notice">
      <b>공지사항</b> <br /><br />
      <p>EnjoyTrip의 업데이트 정보 등 다양한 소식을 알려드립니다.</p>
    </div>

    <div>
      <table class="styled-table">
        <thead>
          <tr>
            <th>카테고리</th>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="changePage(currentPage - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
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
            aria-label="Next"
            @click.prevent="changePage(currentPage + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const items = ref([])
const currentPage = ref(1)
const totalPages = ref(1)
const pageSize = 5

const fetchNotices = async (page = 1) => {
  try {
    // 백엔드에 요청할 때 페이지 번호를 0 기반으로 변환
    const response = await axios.get(
      `http://localhost:8080/api/notices?page=${page - 1}&size=${pageSize}`,
      { withCredentials: true }
    )
    items.value = response.data.data
    currentPage.value = page
    // 백엔드에서 받은 totalPages를 사용합니다.
    totalPages.value = response.data.totalPages
  } catch (error) {
    console.error('Error fetching notices:', error)
  }
}

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    fetchNotices(page)
  }
}

onMounted(() => {
  fetchNotices()
})
</script>

<style scoped>
.styled-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 20px;
}

.styled-table th,
.styled-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.styled-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.styled-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.styled-table tbody tr:hover {
  background-color: #ddd;
}

.notice {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 1280px;
  margin: 0 auto 10px auto;
  text-align: left;
}

.notice p {
  margin: 0;
  font-size: 16px;
  color: #333;
  text-align: left;
}

.notice b {
  font-size: 20px;
}

.pagination {
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

.page-item {
  margin: 0 2px;
}

.page-item a {
  display: block;
  padding: 8px 12px;
  color: #007bff;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.page-item.disabled a {
  pointer-events: none;
  color: #ccc;
  border-color: #ccc;
}

.page-item.active a {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
