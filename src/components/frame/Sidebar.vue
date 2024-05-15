<template lang="">
  <aside>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo h-screen"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      router
      data-testid="sidebar-menu"
    >
      <!-- profile menu bar -->
      <el-menu-item-group>
        <div class="flex items-center gap-3 mx-4 my-2">
          <el-avatar size="small" :icon="UserFilled" />
          {{ userInfo.username }}
        </div>
      </el-menu-item-group>

      <!-- <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->
      <el-menu-item v-for="item in menus" :key="item.name" :index="item.name" @click="item.onClick">
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <template #title>{{ item.name }}</template>
      </el-menu-item>
    </el-menu>
  </aside>
</template>
<script setup lang="ts">
import { ref, h } from 'vue'
import { useRouter } from 'vue-router'
import { menus } from '@/constants/routes'
import { UserFilled, Setting } from '@element-plus/icons-vue'
import { useAuth } from '@/hooks'

const { userInfo } = useAuth()
const router = useRouter()

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang=""></style>
