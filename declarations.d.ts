declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}


// import '@react-navigation/native';

// declare module '@react-navigation/native' {
//   export interface Theme {
//     dark: boolean;
//     colors: any;
//     fonts: {
//       regular: { fontFamily: string; fontWeight: string };
//       medium: { fontFamily: string; fontWeight: string };
//       bold: { fontFamily: string; fontWeight: string };
//       heavy: { fontFamily: string; fontWeight: string };
//     };
//   }
// }