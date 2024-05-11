<template>
  <div class="flex-y-center">
    <SignForm :on-finish="onFinish" :sign-type="SignType.Login" />
  </div>
</template>
<script setup lang="ts">
import { SignType } from '@/typings'
import type { SignUser } from '@/typings/user'
import SignForm from '@/components/SignForm.vue'

const onFinish = async (values: any) => {
  authService
}



const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>
<style></style>
