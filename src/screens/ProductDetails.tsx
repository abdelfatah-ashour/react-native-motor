import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from "react-native";
import IAntDesign from "react-native-vector-icons/Ionicons";

const ProductDetails = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.details}>
          <Text style={styles.details_text}>Details</Text>
        </View>
        <View style={styles.box_product_name}>
          <Text style={styles.product_name_text}>lamborghini cayma's</Text>
          <Text style={styles.price_text}>$130.00 K</Text>
        </View>
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1535448580089-c7f9490c78b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80",
            }}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
            }}
            resizeMethod="resize"
            resizeMode={"cover"}
          />
        </View>
        <View style={styles.wrap_boxes_text}>
          <View style={styles.wrap_boxes_text_box}>
            <IAntDesign name="speedometer" style={styles.icon} />
            <Text>350 KM</Text>
          </View>
          <View style={styles.wrap_boxes_text_box}>
            <IAntDesign name="people" style={styles.icon} />
            <Text>2 Users</Text>
          </View>
          <View style={styles.wrap_boxes_text_box}>
            <IAntDesign name="game-controller" style={styles.icon} />
            <Text>Manual</Text>
          </View>
        </View>
        <View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, quos vero at temporibus placeat
            nesciunt neque. Quasi inventore distinctio et, ut ipsum quos dolorem corporis tempore, nam voluptas delectus
            similique facilis iste culpa magni itaque facere illum architecto aspernatur sapiente harum error non omnis!
            Nam natus obcaecati doloribus molestiae perferendis.
          </Text>
        </View>
        <TouchableHighlight
          style={{
            backgroundColor: "#9de",
            margin: 10,
            borderRadius: 6,
            padding: 4,
          }}
          onPress={() => Alert.alert("saved successfully!")}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              lineHeight: 30,
              textAlign: "center",
            }}>
            Save
          </Text>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  details: {
    alignItems: "center",
  },
  details_text: {
    fontWeight: "700",
    lineHeight: 30,
    fontSize: 18,
  },
  box_product_name: {
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  product_name_text: {
    color: "#222",
    fontSize: 18,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  price_text: {
    color: "#c57c",
    fontSize: 14,
    fontWeight: "600",
  },
  wrap_boxes_text: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 30,
  },
  wrap_boxes_text_box: {
    flex: 0.3,
    backgroundColor: "#eee",
    minHeight: 75,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 40,
    color: "#444",
  },
  description: {
    fontSize: 16,
    padding: 10,
  },
});
