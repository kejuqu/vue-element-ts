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
  <div class="flex gap-4 flex-wrap">
    <el-card v-for="(item, index) in books" :key="item.searchIdx" shadow="always" class="w-full">
      <img :src="item.bookInfo.cover" :alt="item.bookInfo.title" />
      <div>{{ item.bookInfo.title }}</div>
      <div>{{ item.bookInfo.author }}</div>
      <div>{{ item.bookInfo.intro }}</div>
    </el-card>
  </div>
</template>

<style></style>
