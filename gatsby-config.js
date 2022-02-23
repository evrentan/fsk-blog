module.exports = {
  siteMetadata: {
    title: `My World`,
    author: {
      name: `Furkan Şahin Kulaksız`,
      summary: `Software Developer`,
    },
    description: `Software Developer`,
    siteUrl: `http://localhost:8000/`,
    social: {
      twitter: `0xfsk`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`
          },
        ],
      },
    },
    {
      resolve: `gatsby-remark-highlight-code`,
      options: {
        terminal: 'carbon',
        theme: 'blackboard'
      }
    },
  ],
};
