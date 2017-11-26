
module.exports = {

  app: {
    src: './components',
    engines:[
      '@frctl/fractal-engine-nunjucks'
    ],
    plugins:[]
  },

  pages: {
    src: './styleguide',
    dest: './build',
    site: {
      title: 'Omakase',
    },
    routes: {
      components: {
        collection: 'library.components',
        template: '_component.njk',
        permalink: 'components/{component.id}'
      }
    },
  },

  inspector: {}

};
