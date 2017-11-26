module.exports = {

  variants: [
    {
      id: 'default',
      scenarios: [
        {
          label: 'Nevan Scott',
          context: {
            siteName: 'Nevan Scott',
            navLinks: [
              {
                url: '#',
                text: 'Writing'
              },
              {
                url: '#',
                text: 'Portfolio'
              },
              {
                url: '#',
                text: 'Teaching'
              },
              {
                url: '#',
                text: 'Reading'
              }
            ]
          }
        },
        {
          label: 'Notated',
          context: {
            siteName: 'notated.org',
            navLinks: [
              {
                url: '#',
                text: 'Blog'
              },
              {
                url: '#',
                text: 'About'
              },
              {
                url: '#',
                text: 'Projects'
              },
              {
                url: '#',
                text: 'Archive'
              }
            ]
          }
        }
      ]
    }
  ]

};
