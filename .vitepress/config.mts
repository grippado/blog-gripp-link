import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "blog | gripp.link",
  description: "Make with VitePress and Proudly Hosted on Vercel",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://gripp.link', target: '_self' },
      { text: 'Next Trip', link: 'https://gripp.link/next-trip', target: '_self' }
    ],

    sidebar: [
      {
        text: 'Posts',
        items: [
          { text: 'Descomunizando', link: '/posts/descomunizando' },
          { text: 'Culpa', link: '/posts/culpa' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/grippado' }
    ]
  }
})
