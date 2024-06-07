import { defineConfig } from 'vitepress'
import AllPosts from '../posts/AllPost'
// https://vitepress.dev/reference/site-config
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  // base:'/blog/',
  title: "Timmy",
  description: "About Frontend",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/all-posts' }
    ],

    sidebar: [
      {
        text: 'vue',
        items: AllPosts.map((item)=>{
          return {
            text: item,
            link: `/posts/${item}`
          }
        })
        // items: [
        //   { text: 'Markdown Examples', link: '/markdown-examples' },
        //   { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      }
    ],
    // aside:'left',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TIM56887' }
    ]
  },
  
  
  
})
