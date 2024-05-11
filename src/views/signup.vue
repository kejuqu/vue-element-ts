<template>
  <div class="flex-y-center">
    <SignForm :on-finish="onFinish" :sign-type="SignType.Signup" />
  </div>
</template>

<script setup lang="ts">
import { SignType } from '@/typings'
import SignForm from '@/components/SignForm.vue'

const onFinish = (values: any) => {
  console.log('Succes XXXX s:', values)
}
</script>

<style></style>
