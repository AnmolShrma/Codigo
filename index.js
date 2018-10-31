/** @format */

import { Navigation } from "react-native-navigation";
import App from "./App";
Navigation.registerComponent(`com.codigo.FirstScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});
