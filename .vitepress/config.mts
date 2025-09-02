import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  title: "winkalc",
  description: "A toy model for arithmetic computing",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/winkalc-logo.png',
    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Introduction', link: '/intro' },
          { text: 'CLI Syntax',   link: '/syntax' },
          { text: 'Parse',      link: '/parse' },
          { text: 'Examples',     link: '/example' },
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About winkalc',   link: '/about' },
          { text: 'Future Forecast', link: '/future' },
          { text: 'Acknowledgement', link: '/thankyou' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/0xwink/winkalc' }
    ]
  },

  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap', rel: 'stylesheet' }
    ],
    [
      'link',
      { rel: 'icon', href: '/winkalc-favicon.ico' }
    ]
  ]
})
