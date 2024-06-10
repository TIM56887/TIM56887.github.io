---
title: '所有文章'
next: false
prev: false
---

<script setup>
  import { data as posts } from './vue-articles/post.data.js'
  import { useData } from 'vitepress'

  let sidebar = useData().theme.getter().sidebar
  sidebar = sidebar.slice(1)
</script>
<h1>所有文章</h1>
<div v-for="item in sidebar">
  <h3>{{ item.text }}</h3>
  <ul>
    <li v-for="post in item.items">
      <a :href="post.link">{{ post.text }}</a>
    </li>
  </ul>
</div>
