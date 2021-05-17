/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

console.log(`Loading ${__filename}`);

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
