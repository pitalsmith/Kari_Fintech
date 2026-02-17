// module.exports = function (api) {
//   api.cache(true);
//   let plugins = [];

//   plugins.push('react-native-worklets/plugin');

//   return {
//     presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],

//     plugins,
//   };
// };


// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: [
//       ["babel-preset-expo", { jsxImportSource: "nativewind" }],
//       "nativewind/babel",
      
//     ],
//   };
// };


// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: [
//       ["babel-preset-expo", { jsxImportSource: "nativewind" }],
//       "nativewind/babel",
//     ],
//     plugins: [
//       // Add this plugin for path alias
//       [
//         "module-resolver",
//         {
//           root: ["./src"],      // same as your tsconfig baseUrl
//           alias: {
//             "@": "./src",        // matches your tsconfig path
//           },
//         },
//       ],
//       // Keep your other plugins if you have them
//       "react-native-worklets/plugin", 
//     ],
//   };
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@": "./src",
          },
        },
      ],
      // REMOVED: "react-native-worklets/plugin" (Reanimated handles this now)
      // "react-native-reanimated/plugin", // Always keep this LAST
    ],
  };
};