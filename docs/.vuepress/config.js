module.exports = {
  title: 'VS Code -Snippets For (Technical) Writing',
  description: 'Visual Studio Code Snippets For Markdown and reST',
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  nav: [
    { text: 'GitHub', link: 'https://github.com/ocular-d/ocld-snippets' }
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: '/ocld-logo.png',
    repo: 'ocular-d/ocld-snippets',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Help us improve this page!',
    sidebar: [
      {
      title: 'Guide',
      collapsable: false,
      children: [
        'dependencies',
        'extensions',
        'install',
        'contribute',
        'credits'
      ]
      },
      {
        title: 'Extensions',
        collapsable: false,
        children: [
          'dependencies',
          'extensions',
          'install',
          'contribute',
          'credits'
        ]
      }
  ]
  },
  plugins: {'@vuepress/medium-zoom': true},
}
