---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "Hi! I'm Tim"
  text: "Frontend Dev \nin Taiwan"
  tagline: "紀錄前端開發日常，最大的讀者是自己，消化自己的所學，鍛鍊自己的思考，涉獵更多技術，增加寫技術文件的能力，加速學習過程"
  image:
    src: /vuetify-logo-light-atom.svg
    alt: vuetify
  actions:
    - theme: brand
      text: 查看文章
      link: /all-posts
    # - theme: alt
    #   text: View Projects
    #   link: /projects
features:
  - icon: 
      src: /icons-vuejs.png
    title: Vue 
    details: view
    link: https://vuejs.org/
  - icon: 
      src: /vue-router.png
    title: Vue router
    details: Currently using Vue router.
    link: https://router.vuejs.org/
  - icon: 
      src: /pinia.svg
    title: Pinia
    details: Currently using Pinia.
    link: https://pinia.vuejs.org/
  - icon: 
      src: /vueuse.svg
    title: VueUse
    details: Currently using VueUse.
    link: https://vueuse.org/
  - icon: 
      src: /nuxt_logo.png
    title: Nuxt
    details: Currently using Nuxt.
    link: https://nuxt.com/
  - icon: 
      src: /vuetify-logo-light-atom.svg
    title: Vuetify
    details: Currently using Vuetify.
    link: https://vuetifyjs.com/en/
  - icon: 
      src: /react.svg 
    title: React
    details: ...還沒有學會React
    link: https://react.dev/
  - icon:
      src: /svelte1.svg
    title: Svelte
    details: 也還沒有學會Svelte...
    link: https://svelte.dev/
  

aboutMe:
  bio: "I'm Timmy, a passionate frontend developer specializing in Vue.js. Follow my journey on Twitter or GitHub."
  socialLinks:
    - platform: twitter
      link: https://twitter.com/yourTwitterHandle
    - platform: github
      link: https://github.com/yourGitHubHandle
      
---

<script setup>
  import { v4 as uuidv4 } from 'uuid';
const log = {
    Id: uuidv4(),
    visitTime: new Date().toISOString(),
    visitUrl: window.location.href,
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    colorDepth: window.screen.colorDepth,
    timezoneOffset: new Date().getTimezoneOffset(),
    browserName: navigator.appName,
    browserVersion: navigator.appVersion,
    os: navigator.oscpu,
    deviceMemory: navigator.deviceMemory,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceType: navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop',
    screenOrientation: window.screen.orientation.type,
    networkInformation: {
        effectiveType: navigator.connection.effectiveType,
        rtt: navigator.connection.rtt,
        downlink: navigator.connection.downlink,
        saveData: navigator.connection.saveData,
    },
}
try {
fetch('https://a3zh2tapwj.execute-api.ap-northeast-1.amazonaws.com/visitLog', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(log),  // 將 log 轉為 JSON 字符串
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        
    })
    .catch(error => {
        
    });
} catch (error) {
    
}
</script>


