module.exports = {
  siteMetadata: {
    title: `Chris Png`,
    description: `My portfolio website`,
    author: `@chrpng`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-chrpng-portfolio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
		{
      resolve: `gatsby-plugin-styled-components`,
    },
		{
			resolve: `gatsby-plugin-transition-link`,
			// options: {
			// 	layout: require.resolve('./src/components/Layout.js')
			// }
		},
		{
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Quicksand`,
              variants: [`300`, `500`, `700`],
						},
						{
              family: `Ubuntu`,
              variants: [`400`, `700`],
						},
          ],
        },
      },
		},
  ],
}
