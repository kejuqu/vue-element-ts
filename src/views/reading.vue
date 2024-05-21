<script setup lang="ts">
import { ref } from 'vue'
import { readingService } from '@/services/readingService'

const books = ref([])
const getBooks = async () => {
  const { data } = await readingService.books()
  console.log('data: ', data)
  const { categoryStoreModule } = data
  const { categoryInfo, categoryBookList } = categoryStoreModule

  books.value = categoryBookList
  return categoryStoreModule
}

const { categoryInfo, categoryBookList } = getBooks()

console.log('categoryBookList: ', categoryBookList)
</script>
<template>
  <div class="flex justify-between gap-2 flex-wrap w-full">
    <el-card
      v-for="(item, index) in books"
      :key="item.searchIdx"
      shadow="always"
      class="flex lg:flex-[1_0_26%] xl:flex-[1_0_23%] hover:bg-blue-200 transition-colors"
    >
      <div class="flex gap-2 mb-2">
        <img :src="item.bookInfo.cover" :alt="item.bookInfo.title" />
        <div class="flex flex-col">
          <div>{{ item.bookInfo.title }}</div>
          <div class="text-gray-500">{{ item.bookInfo.author }}</div>
          <div class="text-gray-500">阅读量: {{ item.readingCount }}</div>
          <div class="text-gray-500">类别: {{ item.bookInfo.category }}</div>
        </div>
      </div>
      <div class="w-full">{{ item.bookInfo.intro }}</div>
    </el-card>
  </div>
</template>

<style></style>
