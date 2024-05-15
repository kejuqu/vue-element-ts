<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAuth } from './hooks'
import Layout from './layouts/index.vue'

const { isLogin } = useAuth()
</script>

<template>
  <RouterView />
</template>
