import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import * as Font from "expo-font";
import React from 'react';

export default function App() {

  const customFonts = {
    UberMoveBold: require("./assets/fonts/UberMoveBold.otf"),
    UberMoveMedium: require("./assets/fonts/UberMoveMedium.otf"),
    UberMoveRegular: require("./assets/fonts/UberMoveRegular.otf"),
    UberMoveLight: require("./assets/fonts/UberMoveLight.otf"),
  };

  React.useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync(customFonts);
      }
      catch (err) {
        console.log("ERROR of fonts ====> ", err)
      }
    })();
  }), [customFonts];

  return (
    <Navigation />
  );
}


