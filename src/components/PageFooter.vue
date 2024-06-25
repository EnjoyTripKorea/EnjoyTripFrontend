<template>
  <footer style="background-color: #deded5; height: 300px; overflow: hidden">
    <div class="container p-5 justify-content-start">
      <div class="col-6">
        <h5 class="mb-3" style="letter-spacing: 2px; color: #818963">고객지원실 운영안내</h5>
        <p style="color: #4f4f4f; line-height: 1.6">
          연중무휴 09:00-18:00 <br />
          (점심시간 12:00-13:00) <br />
          ※ 항공권 환불/변경은 평일 09:00-17:00 접수 가능 <br />
          유선상담 1670-8208
        </p>
      </div>

      <div class="col">
        <h5 class="mb-3" style="letter-spacing: 2px; color: #818963">소개</h5>
        <ul class="list-unstyled mb-0">
          <li class="mb-2">
            <a href="#!" style="color: #4f4f4f">회사소개</a>
          </li>
          <li class="mb-2">
            <a href="#!" style="color: #4f4f4f">채용</a>
          </li>
          <li class="mb-2">
            <a href="#!" style="color: #4f4f4f">공고</a>
          </li>
        </ul>
      </div>
      <div class="col">
        <h5 class="mb-3" style="letter-spacing: 2px; color: #818963">파트너</h5>
        <ul class="list-unstyled mb-0">
          <li class="mb-2">
            <a href="#!" style="color: #4f4f4f">파트너 홈</a>
          </li>
          <li class="mb-2">
            <a href="#!" style="color: #4f4f4f">마케팅/제휴 문의</a>
          </li>
        </ul>
      </div>
      <div class="col">
        <h5 class="mb-3" style="letter-spacing: 2px; color: #818963">EnjoyTrip</h5>
        <ul class="list-unstyled mb-0">
          <li class="mb-2">
            <a href="#!" style="color: #4f4f4f">뉴스룸</a>
          </li>
          <li class="mb-2">
            <a href="#!" style="color: #4f4f4f">새로운 기능</a>
          </li>
          <li class="mb-2">
            <a href="#!" style="color: #4f4f4f">채용정보</a>
          </li>
          <li class="mb-2">
            <a href="#!" style="color: #4f4f4f">투자자 정보</a>
          </li>
          <li class="mb-2">
            <a href="#!" style="color: #4f4f4f">EnjoyTrip 긴급 숙소</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container p-5 justify-content-start">
      <div class="dotted-border"></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer p {
  text-align: left;
}

/* <ul> 요소 안의 링크 텍스트를 왼쪽으로 정렬 */
footer ul.list-unstyled li a {
  text-align: left;
}

.dotted-border {
  width: 200px;
  height: 100px;
  border: 1px dotted black;
}
</style>
