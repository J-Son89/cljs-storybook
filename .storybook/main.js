/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../out/*_story.js"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-react-native-web"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  features: {
    interactionsDebugger: true,
    storyStoreV7: false, // <----- THIS
},
  docs: {
    // autodocs: "tag",
  },
  // "core": {
  //   "builder": "webpack5"
  // },
  // webpackFinal: (config) => {
  //   const { rules } = config.module;
  //   config.module.rules = [...rules, ...appConfig.module.rules];

  //   config.plugins.push(new webpack.ProvidePlugin({
  //     process: 'process/browser',
  //   }));

  //   return config;
  // },
};
export default config;
