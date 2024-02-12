import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function TestBox() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.nameText}>React Native School</Text>
          <Text style={styles.followText}>Follow</Text>
        </View>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri:
              "<https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?cs=srgb&dl=pexels-michael-block-3225517.jpg&fm=jpg>",
          }}
        />
        <View style={styles.footer}>
          <Text>
            <Text style={styles.nameText}>{`React Native School `}</Text>
            This has been a tutorial on how to build a layout with Flexbox. I
            hope you enjoyed it!
          </Text>
        </View>
      </View>
    </View>
  );
}

const screen = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7CA1B4",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    width: screen.width * 0.8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    height: screen.width * 0.8,
  },
  footer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  nameText: {
    fontWeight: "bold",
    color: "#20232a",
  },
  followText: {
    fontWeight: "bold",
    color: "#0095f6",
  },
});