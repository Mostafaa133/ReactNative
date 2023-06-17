import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View>
      <Text
        style={{
          backgroundColor: "aqua",
          marginTop: 30,
          fontSize: 15,
          textAlign: "left",
          textAlignVertical: "center",
          padding: 20,
        }}
      >
        nav
      </Text>
      <View style={styles.container}>
        <ScrollView horizontal>
          <Image
            source={require("./assets/lidye-1Shk_PkNkNw-unsplash.jpg")}
            style={{ width: 395, height: 200, resizeMode: "contain" }}
          ></Image>
          <Image
            source={require("./assets/dan-gold-4_jhDO54BYg-unsplash.jpg")}
            style={{ width: 395, height: 200, resizeMode: "contain" }}
          ></Image>
          <Image
            source={require("./assets/brooke-lark-08bOYnH_r_E-unsplash.jpg")}
            style={{ width: 395, height: 200, resizeMode: "contain" }}
          ></Image>
          <Image
            source={require("./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg")}
            style={{ width: 395, height: 200, resizeMode: "contain" }}
          ></Image>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
