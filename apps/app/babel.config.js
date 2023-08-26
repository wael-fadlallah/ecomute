process.env.TAMAGUI_TARGET = "native";

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ['@tamagui/babel-plugin', {
        config: './tamagui.config.ts',
        components: ['tamagui'],
    }],
    ['transform-inline-environment-variables', {
        include: 'TAMAGUI_TARGET'
    }]
],
}
