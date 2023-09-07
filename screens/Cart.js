import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { NativeModules } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/mini";
import { useNavigation } from "@react-navigation/native";
import { cartItems } from "../contants";
import FruitCart from "../components/FruitCart";

export default function Cart() {
  const { StatusBarManager } = NativeModules;
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginVertical: 20 }}>
      <SafeAreaView
        style={{
          marginTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon color={"black"} size={30} />
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>Your Cart</Text>
        </View>
        {/* Cart Items */}
        <View>
          {cartItems.map((data) => {
            return <FruitCart key={data.name} data={data} />;
          })}
        </View>
        {/* Payment Button */}
        <View style={{ marginTop: 20 }}>
          <Text
            style={{ textAlign: "right", marginHorizontal: 20, fontSize: 18 }}
          >
            Total Price:{" "}
            <Text style={{ color: "orange", fontWeight: "bold" }}>$420.80</Text>
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "orange",
              paddingVertical: 20,
              marginHorizontal: 20,
              borderRadius: 10,
              shadowColor: "orange",
              shadowRadius: 25,
              shadowOffset: { width: 0, height: 15 },
              shadowOpacity: 0.4,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
              Payment
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
