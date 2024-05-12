<template>
  <div class="flex-y-center">
    <SignForm :on-finish="onFinish" :loading="isPending" :sign-type="SignType.Login" />
  </div>
</template>
<script setup lang="ts">
import { SignType } from '@/typings'
import SignForm from '@/components/SignForm.vue'
import { useSignIn } from '@/hooks/useSignIn'

const { isPending, mutate: login } = useSignIn()

const onFinish = async (values: any) => {
  login(values)
}
</script>
<style></style>
