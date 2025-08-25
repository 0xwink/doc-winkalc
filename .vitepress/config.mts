import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  
  title: "winkalc",
  description: "A toy model for arithmetic computing",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Introduction', link: '/intro'},
          { text: 'CLI Syntax', link: '/syntax'},
          { text: 'Parsing', link: '/parse'},

        ]
      },
      {
        text: 'About',
        items: [
          {text: 'Future Forecast', link: '/future'},
          {text: 'Acknowledgement', link: '/thankyou'},
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
