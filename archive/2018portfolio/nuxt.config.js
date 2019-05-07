const config = require('./assets/config');


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Owen Rauckman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Hello, I'm Owen. I design UIs, build web apps, write backend services, and anything in between." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    base: '/',

    // Extend routes since projects are dynamically generated
    extendRoutes (routes, resolve) {

      const test = [];

      /*
        Generate The Project Routes from config
      */
      Object.keys(config).forEach((project) => {
        test.push({
          path: `${config[project].slug}`,
          component: resolve(__dirname, 'pages/project.vue'),
          name: config[project].name,
        });
      });


      // default to directio
      routes.push({
        path: '/projects',
        component: resolve(__dirname, 'pages/projects.vue'),
        redirect: '/projects/directio',
        name: 'directio',
        children: test
      })
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
