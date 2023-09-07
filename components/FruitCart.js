import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { PlusIcon, MinusIcon } from "react-native-heroicons/mini";
import { theme } from "../theme/theme";

export default function FruitCart({ data }) {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Image
            source={data.image}
            style={{
              width: 80,
              height: 80,
              shadowColor: data.shadow,
              shadowOffset: { width: 0, height: 15 },
              shadowOpacity: 0.4,
              shadowRadius: 15,
              zIndex: 1,
            }}
          />
          <View
            style={{
              marginTop: -60,
              height: 80,
              width: 80,
              backgroundColor: data.color(1),
              borderRadius: 20,
            }}
          ></View>
        </View>
        {/* Product Info */}
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{data.name}</Text>
          <Text style={{ color: "orange", fontWeight: "bold", fontSize: 18 }}>
            ${data.price}
          </Text>
        </View>
        {/* Quanitity */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: theme.cartButton,
              padding: 5,
              borderRadius: 10,
            }}
          >
            <PlusIcon size={20} color={"orange"} />
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 10 }}>{data.qty}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: theme.cartButton,
              padding: 5,
              borderRadius: 10,
            }}
          >
            <MinusIcon size={20} color={"orange"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
