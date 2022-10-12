import { View, Text, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";

const win = Dimensions.get("window");

export function Explore({ navigation }: any) {
  return (
    <>
      <View style={styles.wrapper_img}>
        <Image
          source={{
            uri: "https://wallpapercave.com/wp/wp5744408.jpg",
          }}
          resizeMode={"cover"}
          style={styles.img}
        />
        <TouchableWithoutFeedback onPress={() => navigation.navigate("home")}>
          <View style={styles.explore_now}>
            <Text style={styles.explore_now__text}>explore now</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper_img: {
    flex: 1,
    position: "relative",
  },
  img: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    resizeMode: "stretch",
  },
  explore_now: {
    width: "50%",
    position: "absolute",
    bottom: 100,
    right: 0,
    backgroundColor: "#fff",
    color: "#000",
    borderTopStartRadius: 30,
    borderBottomStartRadius: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  explore_now__text: {
    fontSize: 20,
    fontWeight: "700",
    padding: 20,
    textTransform: "uppercase",
  },
});
