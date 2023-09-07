import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { HeartIcon } from "react-native-heroicons/solid";

export default function FruitCard({ data }) {
  const [favourite, setFavourite] = useState(false);
  return (
    <View
      style={{
        width: 270,
        margin: 10,
        backgroundColor: data.color(1),
        padding: 10,
        borderRadius: 20,
        height: 400,
        position: "relative",
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 10,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          padding: 10,
          borderRadius: 50,
        }}
        onPress={() => setFavourite(!favourite)}
      >
        <HeartIcon size={30} color={favourite ? data.shadow : "white"} />
      </TouchableOpacity>
      <View
        style={{
          shadowColor: data.shadow,
          shadowOffset: { width: 0, height: 80 },
          shadowOpacity: 0.6,
          shadowRadius: 40,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          source={data.image}
          style={{
            width: "100%",
            height: 200,
            objectFit: "contain",
          }}
        />
      </View>
      <View style={{ position: "absolute", bottom: 20, left: 20 }}>
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 22 }}>
          {data.name}
        </Text>
        <Text style={{ fontWeight: "bold", color: "white", marginTop: 10 }}>
          $ {data.price}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
