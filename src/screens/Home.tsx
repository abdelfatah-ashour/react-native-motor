import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper_header_Home}>
        <View style={styles.wrapper_header_Home__child}>
          <Text>Img</Text>
        </View>
        <View style={styles.wrapper_header_Home__child}>
          <Text>center</Text>
        </View>
        <View style={styles.wrapper_header_Home__child}>
          <Text>I</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper_header_Home: {
    display: "flex",
    flexDirection: "row",
    minHeight: 100,
    backgroundColor: "#eee",
  },
  wrapper_header_Home__child: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    borderColor: "#111",
    borderWidth: 1,
  },
});
