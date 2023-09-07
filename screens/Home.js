import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  Bars3CenterLeftIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/mini";
import { theme } from "../theme/theme";
import { categories, featuredFruits } from "../contants";
import { StatusBar } from "expo-status-bar";
import { NativeModules } from "react-native";
import FruitCard from "../components/FruitCard";
import FruitSalesCard from "../components/FruitSalesCard";

export default function Home() {
  const { StatusBarManager } = NativeModules;
  const [activeCategory, setActiveCategory] = useState("Oranges");
  return (
    <ScrollView
      style={{
        paddingHorizontal: 30,
        marginTop:
          Platform.OS === "android"
            ? StatusBarManager.HEIGHT
            : StatusBar.currentHeight,
      }}
    >
      <SafeAreaView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Bars3CenterLeftIcon size={30} color={"black"} />
          <TouchableOpacity
            style={{
              backgroundColor: theme.cartButton,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <ShoppingCartIcon size={30} color={"orange"} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25 }}>Seasonal</Text>
          <Text style={{ fontWeight: "bold", fontSize: 35, marginTop: 5 }}>
            Fruits and Vegetables
          </Text>
        </View>
      </SafeAreaView>
      {/* Categories */}
      <View style={{ marginTop: 20 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((data) => {
            let isActive = activeCategory == data;
            return (
              <TouchableOpacity
                key={data}
                onPress={() => setActiveCategory(data)}
              >
                <Text
                  style={{
                    marginRight: 20,
                    fontSize: 20,
                    fontWeight: isActive ? "bold" : "normal",
                  }}
                >
                  {data}
                </Text>
                {isActive ? (
                  <Text
                    style={{
                      marginTop: -7,
                      color: theme.underline,
                      fontWeight: "bold",
                    }}
                  >
                    ___ _
                  </Text>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/* Fruit Card */}
      <View style={{ marginTop: 20 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredFruits.map((data) => {
            return <FruitCard data={data} key={data.name} />;
          })}
        </ScrollView>
      </View>
      {/* Hot Sales */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Hot Sales</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...featuredFruits].reverse().map((data) => (
            <FruitSalesCard key={data.name} data={data} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
