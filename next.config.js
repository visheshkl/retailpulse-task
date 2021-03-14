const withImages = require("next-images");
const path = require("path");

module.exports = withImages({
  inlineImageLimit: false,
  exclude: path.resolve(__dirname, "src/assets/svg"),
  webpack: (config, _options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false, 
          },
        },
      ],
    });

    return config;
  },
});