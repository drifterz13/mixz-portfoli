module.exports = {
  siteMetadata: {
    title: `Mix's Portfolio`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'tnvc6jeiqee7',
        accessToken: '7c47f17ce70637904cce08c834c3388c97b1d5d938824212398c889db7d4c6fa',
        host: 'localhost:8000'
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,700`
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
