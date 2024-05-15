<template lang="">
  <el-breadcrumb>
    <el-breadcrumb-item :to="{ path: '/' }">space</el-breadcrumb-item>
    <el-breadcrumb-item>{{ userInfo?.username }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts" setup>
import { useAuth } from '@/hooks'
import { ArrowRight } from '@element-plus/icons-vue'

// TODO: base router config to render breadcrumb
const { userInfo } = useAuth()
</script>
<style lang=""></style>
