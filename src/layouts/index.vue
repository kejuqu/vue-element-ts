<template lang="">
  <section class="w-full h-screen flex">
    <Sidebar />
    <section class="w-full flex flex-col p-8">
      <Header />
      <main class="">
        <RouterView />
      </main>
    </section>
  </section>
</template>

<script>
import Sidebar from '@/components/frame/Sidebar.vue'
import Header from '@/components/frame/Header.vue'
</script>

<style lang=""></style>
