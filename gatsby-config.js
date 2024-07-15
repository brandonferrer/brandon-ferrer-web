/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Brandon Ferrer Web`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Gloock&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,700;0,6..12,800;1,6..12,700&family=Permanent+Marker&family=Roboto+Mono:ital,wght@0,200;0,500;0,700;1,200;1,500&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ["UCZNVGDDQGJTPt1SiybZjXgw"],
        apiKey: "AIzaSyBOKRZewi3qqsM4xDiFe5GtcVyKzpcFMZE", // Optional for public requests
        maxVideos: 50, // Defaults to 50
      },
    },
  ],
};
