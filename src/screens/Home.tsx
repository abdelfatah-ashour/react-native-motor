import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Iionic from "react-native-vector-icons/Ionicons";
import IAntDesign from "react-native-vector-icons/Ionicons";
import { brands } from "../utilities/data/bands";

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.wrapper_header_Home}>
          <View style={styles.wrapper_header_Home__child__img}>
            <Icon
              name="user-o"
              style={{
                fontSize: 30,
                color: "#575757",
              }}
            />
          </View>
          <View style={styles.wrapper_header_Home__child__locations}>
            <Iionic
              name="ios-location-sharp"
              style={{
                fontSize: 30,
                color: "#575757",
                marginRight: 10,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
              }}>
              United State
            </Text>
          </View>
          <View style={styles.wrapper_header_Home__child__img}>
            <Icon
              name="search"
              style={{
                fontSize: 30,
                color: "#575757",
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.home_main_text}>let's find a vehicle for you</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
          {brands.map(brand => {
            return (
              <View key={brand.name} style={styles.brand}>
                <Image
                  source={{
                    uri: brand.url,
                  }}
                  style={{
                    width: 45,
                    height: 45,
                  }}
                  resizeMethod="resize"
                  resizeMode={"cover"}
                />
                <Text>{brand.name}</Text>
              </View>
            );
          })}
          <View></View>
        </ScrollView>
        <View style={styles.available_texts}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}>
            Available Car's
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}>
            More
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("/product/view");
          }}>
          <View style={styles.home_card}>
            <View style={styles.home_card__image}>
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
            <View style={styles.home_card__heading}>
              <Text style={styles.home_card__heading__text}>Lamborghini Car's</Text>
              <IAntDesign
                name="heart"
                style={{
                  fontSize: 30,
                  color: "red",
                }}
              />
            </View>
            <View
              style={{
                ...styles.home_card__Sub_heading,
                paddingVertical: 6,
              }}>
              <Text style={styles.home_card__Sub_heading__text}>$255.000</Text>
              <Text
                style={{
                  ...styles.home_card__Sub_heading__text,
                  textAlign: "right",
                }}>
                #Manual
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper_header_Home: {
    display: "flex",
    flexDirection: "row",
    minHeight: 100,
  },
  wrapper_header_Home__child__img: {
    flex: 0.3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
  },
  wrapper_header_Home__child__locations: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    flexDirection: "row",
  },
  wrapper_header_Home__child: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    borderWidth: 1,
  },
  wrapper_header_Home__child_Icon: {
    marginRight: 3,
  },
  img: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    resizeMode: "stretch",
  },
  home_main_text: {
    fontSize: 32,
    fontWeight: "500",
    lineHeight: 45,
    paddingVertical: 4,
    paddingRight: 45,
    paddingLeft: 30,
    textTransform: "capitalize",
  },
  brand: {
    width: 90,
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginRight: 10,
    borderRadius: 10,
    padding: 2,
  },
  available_texts: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  home_card: {
    paddingHorizontal: 30,
  },
  home_card__image: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
  },
  home_card__heading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  home_card__heading__text: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
  },
  home_card__Sub_heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  home_card__Sub_heading__text: {
    fontSize: 14,
    fontWeight: "500",
  },
});
