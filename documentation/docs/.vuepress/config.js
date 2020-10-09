module.exports = {
  themeConfig: {
    nav: [
      { text: 'About', link: '/about/' },
    ],
    sidebar: [
      {
        title: 'Components',   // required
        path: '/components/',
        collapsable: false, // optional, defaults to true
      },
      {
        title: 'Layout',   // required
        path: '/components/layout/',      // optional, link of the title, which should be an absolute path and must exist
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/components/layout/container',
          '/components/layout/row',
          '/components/layout/column'
        ]
      },
    ]
  }
}
