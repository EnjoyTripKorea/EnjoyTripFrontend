<template>
  <div class="container">
    <div id="app">
      <div id="header">
        <PageHeader />
      </div>
      <div id="content">
        <RouterView />
      </div>
      <div id="footer">
        <PageFooter />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<style scoped>
html,
body,
#app {
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
}

#header {
  width: 100%;
  min-width: 100%;
  height: 10%;
  min-height: 10%;
  z-index: 1000;
}

#content {
  margin-top: 80px;
  height: calc(80% - 80px); /* Adjust height to account for margin-top */
  min-height: calc(80% - 80px); /* Adjust min-height to account for margin-top */
  overflow-y: scroll;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}

/* Hide scrollbar for webkit browsers */
#content::-webkit-scrollbar {
  display: none;
}

#footer {
  width: 100%;
  min-width: 100%;
  height: 10%;
  min-height: 10%;
}
</style>
