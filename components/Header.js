import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Carousel from "./Banner/Carousel";

const Header = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons name="menu" size={30} style={{ margin: 1 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications" size={30} style={{ margin: 1 }} />
        </TouchableOpacity>
      </View>
      <View>
        <Carousel />
      </View>
    </SafeAreaView>
  );
};

export default Header;
