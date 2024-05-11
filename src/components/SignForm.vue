<template>
  <a-form :model="formState" name="basic" layout="vertical" autocomplete="off" @finish="onFinish">
    <a-typography-title :level="2" class="flex justify-center w-full text-center mb-12">{{
      signInfo.title
    }}</a-typography-title>
    <a-form-item
      label="E-mail"
      name="email"
      :rules="[{ required: true, message: 'Please input your email!', type: 'email' }]"
    >
      <a-input v-model:value="formState.email" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 24 }">
      <a-button type="primary" html-type="submit" class="w-full">{{
        signInfo.submitText
      }}</a-button>
    </a-form-item>
    <a-form-item>
      <div class="flex-center">
        {{ signInfo.link.description }}
        <RouterLink class="ml-2 text-blue-600" :to="signInfo.link.href">
          {{ signInfo.link.text }}</RouterLink
        >
      </div>
    </a-form-item>

    <div class="mt-6">
      <a-divider> Or </a-divider>
      <a-flex wrap="wrap" vertical gap="large">
        <a-button
          v-for="item in thirdLogins"
          :icon="h(item.icon)"
          :key="item.name"
          type="primary"
          ghost
          @click="item.onClick"
          class="w-full flex items-center gap-2"
        >
          <div class="flex gap-4">{{ signType }} with {{ item.name }}</div></a-button
        >
      </a-flex>
    </div>
  </a-form>
</template>
<script setup lang="ts">
import { reactive, h } from 'vue'
import { SignType } from '@/typings'
import type { SignUser } from '@/typings/user'
import { AlipayCircleOutlined, WechatOutlined, GithubOutlined } from '@ant-design/icons-vue'

const { signType } = defineProps<{
  signType: SignType
  onFinish: (values: SignUser) => Promise<void>
}>()

const formState = reactive<SignUser>({
  email: '',
  password: ''
})

const signInfo = {
  [SignType.Login]: {
    title: 'Welcome back',
    submitText: 'Log In',
    description: 'Don’t have an account?',
    link: {
      href: '/sign-up',
      description: 'Not a member yet?',
      text: 'Sign Up'
    }
  },
  [SignType.Signup]: {
    title: 'Create An Account',
    submitText: 'Sign up',
    description: 'Already have an account?',
    link: {
      href: '/login',
      description: 'Already a member?',
      text: 'Sign in'
    }
  }
}[signType]

const thirdLogins = [
  {
    icon: AlipayCircleOutlined,
    name: 'Alipay',
    onClick: () => {
      console.log('todo: implement sse login/signup')
    }
  },
  {
    icon: WechatOutlined,
    name: 'Wechat',
    onClick: () => {
      console.log('todo: implement sse login/signup')
    }
  },
  {
    icon: GithubOutlined,
    name: 'Github',
    onClick: () => {
      console.log('todo: implement sse login/signup')
    }
  }
]
</script>
<style></style>
