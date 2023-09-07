import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function FruitSalesCard({ data }) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={{ margin: 20 }}
        onPress={() =>
          navigation.navigate("Product", { ...data, color: data.color(1) })
        }
      >
        <Image
          source={data.image}
          style={{
            height: 70,
            width: 70,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          zIndex: -1,
          marginTop: -80,
          margin: 10,
          backgroundColor: data.color(0.4),
          borderRadius: 30,
          height: 95,
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>${data.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
