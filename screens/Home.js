import {
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
import { categories } from "../contants";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Oranges");
  return (
    <View style={{ paddingHorizontal: 30 }}>
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
          <View
            style={{
              backgroundColor: theme.cartButton,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <ShoppingCartIcon size={30} color={"orange"} />
          </View>
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
    </View>
  );
}

const styles = StyleSheet.create({});
