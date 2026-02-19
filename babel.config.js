module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        { 
          jsxImportSource: "nativewind",
          reanimated: false, 
        },
      ],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./src",
            "@assets": "./assets",  // Add this for root assets
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};









// // module.exports = function (api) {
// //   api.cache(true);
// //   let plugins = [];

// //   plugins.push('react-native-worklets/plugin');

// //   return {
// //     presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],

// //     plugins,
// //   };
// // };


// // module.exports = function (api) {
// //   api.cache(true);
// //   return {
// //     presets: [
// //       ["babel-preset-expo", { jsxImportSource: "nativewind" }],
// //       "nativewind/babel",
      
// //     ],
// //   };
// // };


// // module.exports = function (api) {
// //   api.cache(true);
// //   return {
// //     presets: [
// //       ["babel-preset-expo", { jsxImportSource: "nativewind" }],
// //       "nativewind/babel",
// //     ],
// //     plugins: [
// //       // Add this plugin for path alias
// //       [
// //         "module-resolver",
// //         {
// //           root: ["./src"],      // same as your tsconfig baseUrl
// //           alias: {
// //             "@": "./src",        // matches your tsconfig path
// //           },
// //         },
// //       ],
// //       // Keep your other plugins if you have them
// //       "react-native-worklets/plugin", 
// //     ],
// //   };
// // };

// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: [
//       [
//         "babel-preset-expo",
//         { 
//           jsxImportSource: "nativewind",
//           // This tells Expo NOT to auto-inject the Reanimated/Worklets plugins
//           // so we can define it manually without a conflict.
//           reanimated: false, 
//         },
//       ],
//       "nativewind/babel",
//     ],
//     plugins: [
//       [
//         "module-resolver",
//         {
//           root: ["./src"],
//           alias: {
//             "@": "./src",
//           },
//            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
//         },
//       ],
//       // We add ONLY Reanimated manually. 
//       // It handles worklets internally, so we don't need the standalone one.
//       "react-native-reanimated/plugin",
//     ],
//   };
// };