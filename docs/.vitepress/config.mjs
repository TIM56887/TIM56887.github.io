import { defineConfig } from 'vitepress'
// import AllPosts from '../posts/post.data.js'
// https://vitepress.dev/reference/site-config
import vue from '@vitejs/plugin-vue';
import { generateSidebar } from 'vitepress-sidebar';
const vitepressSidebarOptions = {
  /* Options... */
};

export default defineConfig({
  ignoreDeadLinks: true,
  head: [['link', { rel: 'icon',type: 'image/x-icon', href: '/favicon.ico' }]],
  // base:'/docs/',
  title: "Timmy",
  description: "About Frontend",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/all-posts' }
    ],
    sidebar: generateSidebar({
      documentRootPath: "/docs",
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      // hyphenToSpace: true,
      // underscoreToSpace: true,
      capitalizeFirst: true,
      // capitalizeEachWords: true,
      collapsed: true,
      collapseDepth: 2,
      // sortMenusByName: false,
      // sortMenusByFrontmatterOrder: false,
      // sortMenusByFrontmatterDate: false,
      // sortMenusOrderByDescending: false,
      // sortMenusOrderNumericallyFromTitle: false,
      // sortMenusOrderNumericallyFromLink: false,
      // frontmatterOrderDefaultValue: 0,
      // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
      // removePrefixAfterOrdering: false,
      // prefixSeparator: '.',
      // excludeFiles: ['first.md', 'secret.md'],
      // excludeFilesByFrontmatter: false,
      // excludeFolders: ['nodejs-articles'],
      // includeDotFiles: false,
      // includeRootIndexFile: true,
      // includeFolderIndexFile: false,
      // includeEmptyFolder: false,
      // rootGroupText: 'Contents',
      // rootGroupLink: 'https://github.com/jooy2',
      // rootGroupCollapsed: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      // debugPrint: true,
    }),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TIM56887' }
    ],
    lastUpdated: {
      text: "最後更新",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
        forceLocale: true,
      },
    },
  },
})
