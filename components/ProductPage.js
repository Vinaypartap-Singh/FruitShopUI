import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { NativeModules } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ChevronLeftIcon } from "react-native-heroicons/mini";
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating-widget";

export default function ProductPage(props) {
  const { StatusBarManager } = NativeModules;
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: props.route.params.color }}>
      <SafeAreaView
        style={{
          paddingHorizontal: 30,
          marginTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={30} color={"black"} />
        </TouchableOpacity>
        {/* Information Container */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={props.route.params.image}
            style={{
              height: 350,
              width: 350,
              shadowColor: props.route.params.color,
              shadowOffset: { width: 0, height: 150 },
              shadowRadius: 125,
              shadowOpacity: 0.5,
            }}
          />
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          paddingHorizontal: 40,
          paddingVertical: 40,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>
          {props.route.params.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>{props.route.params.desc}</Text>
          <Text style={{ fontSize: 16 }}>
            Sold <Text style={{ fontWeight: "bold" }}>239</Text>
          </Text>
        </View>
        <StarRating
          style={{ marginTop: 10 }}
          disabled={true}
          starSize={30}
          containerStyle={{ width: 40 }}
          maxStars={5}
          rating={props.route.params.stars}
          emptyColor="lightgrey"
        />
        <View style={{ height: 165 }}>
          <Text style={{ textAlign: "justify", marginTop: 10 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            eum dolores neque? Nam, rem nobis eveniet officiis quas neque
            repudiandae similique maiores optio nostrum autem animi possimus
            numquam, excepturi illo, ea obcaecati alias ut? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Minima voluptatem tempore
            saepe? Quidem repellendus neque possimus, sit recusandae nobis
            doloremque deserunt corrupti officiis, aliquam quod amet et
            molestiae eveniet aut.
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 30,
            left: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 28 }}>
            $ {props.route.params.price}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={{
              backgroundColor: props.route.params.shadow,
              width: "70%",
              paddingVertical: 20,
              borderRadius: 10,
              shadowColor: props.route.params.color,
              shadowOffset: { width: 0, height: 15 },
              shadowRadius: 25,
              shadowOpacity: 0.5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
