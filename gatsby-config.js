module.exports = {
  pathPrefix: '/blog',
  siteMetadata: {
    title: `TimC | Just keep going`,
    name: `張庭頤(Tim Chang)`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Devoting your passion to what you enthuse on.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/twilightc`,
      },
      {
        name: `mailto`,
        url: `mailto:timmyc2007@gmail.com`,
      },
    ],
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon_transparent.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
