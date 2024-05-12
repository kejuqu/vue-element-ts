<template>
  <el-form
    ref="formRef"
    :model="dynamicValidateForm"
    label-width="auto"
    label-position="top"
    class="demo-dynamic"
  >
    <h2 class="flex justify-center font-bold text-2xl w-full text-center mb-8">
      {{ signInfo.title }}
    </h2>
    <el-form-item
      label="E-mail"
      prop="email"
      :rules="[
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: 'blur'
        }
      ]"
    >
      <el-input v-model="dynamicValidateForm.email" />
    </el-form-item>

    <el-form-item
      label="Password"
      prop="password"
      :rules="[{ required: true, message: 'Please input your password!', trigger: 'blur' }]"
    >
      <el-input show-password type="password" v-model="dynamicValidateForm.password" />
    </el-form-item>

    <el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        html-type="submit"
        @click="submitForm(formRef)"
        class="w-full"
        :loading-icon="LoadingOutlined"
        >{{ signInfo.submitText }}</el-button
      >
    </el-form-item>
    <el-form-item>
      <div class="flex-center w-full">
        {{ signInfo.link.description }}
        <RouterLink class="ml-2 text-blue-600" :to="signInfo.link.href">
          {{ signInfo.link.text }}</RouterLink
        >
      </div>
    </el-form-item>

    <el-divider> Or </el-divider>
    <el-space>
      <el-button
        ghost
        v-for="item in thirdLogins"
        :icon="h(item.icon)"
        :key="item.name"
        @click="item.onClick"
      >
        <div class="">{{ signType }} with {{ item.name }}</div></el-button
      >
    </el-space>
  </el-form>
</template>
<script setup lang="ts">
import { reactive, h, ref } from 'vue'
import { ElMessage, type FormInstance } from 'element-plus'
import {
  AlipayCircleOutlined,
  WechatOutlined,
  LoadingOutlined,
  GithubOutlined
} from '@ant-design/icons-vue'

import { SignType } from '@/typings'
import type { SignUser } from '@/typings/user'

const formRef = ref<FormInstance>()

const { signType, loading, onFinish } = defineProps<{
  loading: boolean
  signType: SignType
  onFinish: (values: SignUser) => Promise<void>
}>()

const dynamicValidateForm = reactive<SignUser>({
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

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid: any) => {
    if (valid) {
      onFinish(dynamicValidateForm)
    } else {
      ElMessage.error('Oops, validation failed.')
    }
  })
}
</script>
