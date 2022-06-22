import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimension,
  FlatList,
  Animated,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Carousel = ({ data }) => {
  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} />;
          }}
        />

        <View style={StyleSheet.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputrange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "#595959",
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
};

export default Carousel;
