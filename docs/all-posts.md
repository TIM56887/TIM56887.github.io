---
title: '所有文章'
next: false
prev: false
---

<script setup>
  import { data as posts } from './vue-articles/post.data.js'
</script>
<h1>All Blog Posts</h1>
<ul>
  <li v-for="post in posts">
    <a :href="post.url">{{ post.frontmatter.title }}</a>
  </li>
</ul>
