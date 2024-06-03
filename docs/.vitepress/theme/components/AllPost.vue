<template>
    <ul>
      <li v-for="page in pages" :key="page.key">
        {{ page }}
      </li>
    </ul>
  </template>
  
  <script setup>
import { useData } from 'vitepress'

const { theme } = useData()
const pages = ['page1', 'page2']
console.log(theme)
</script>
  