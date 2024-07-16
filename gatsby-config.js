/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Brandon Ferrer Web",
    siteUrl: "https://www.brandonferrer.com",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        web: [
          {
            name: "Nunito Sans",
            file: "https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap",
          },
          {
            name: "Indie Flower",
            file: "https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-youtube-v3",
      options: {
        channelId: ["UCZNVGDDQGJTPt1SiybZjXgw"],
        apiKey: "AIzaSyBOKRZewi3qqsM4xDiFe5GtcVyKzpcFMZE", // Optional for public requests
        maxVideos: 50, // Defaults to 50
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
