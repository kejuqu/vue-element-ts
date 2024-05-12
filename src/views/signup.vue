<template>
  <div class="flex-y-center">
    <SignForm :on-finish="onFinish" :loading="isPending" :sign-type="SignType.Signup" />
  </div>
</template>
<script setup lang="ts">
import { SignType } from '@/typings'
import SignForm from '@/components/SignForm.vue'
import { useSignIn } from '@/hooks/useSignIn'

const { isPending, mutate: signup } = useSignIn()

const onFinish = async (values: any) => {
  signup(values)
}
</script>
<style></style>
