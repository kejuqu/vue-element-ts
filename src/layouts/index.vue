<template lang="">
  <section class="w-full h-screen flex">
    <Sidebar />
    <section class="w-full flex flex-col px-8 py-4">
      <Header />
      <main class="">
        layouts
        <!-- <RouterView /> -->
        <!-- <div id="container" v-show="window?.location?.pathname === '/'">xxxx</div> -->
      </main>
    </section>
  </section>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import Sidebar from '@/components/frame/Sidebar.vue'
import Header from '@/components/frame/Header.vue'

// use router
const router = useRouter()
const route = useRoute()
console.log('window.location pathname: ', window.location.pathname)

console.log('router: ', router)
console.log('route: ', route)
</script>

<style lang=""></style>
