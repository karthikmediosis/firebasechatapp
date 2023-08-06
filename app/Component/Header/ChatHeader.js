//import liraries
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../Constant/Color";
import { FONTS } from "../Constant/Font";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import Navigation from "../../Service/Navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
const ChatHeader = (props) => {
  const { data } = props;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.theme}
        translucent={false}
      />
      <Ionicons
        name="chevron-back"
        size={20}
        style={styles.backIcon}
        onPress={() => Navigation.back()}
      />
      <Avatar source={{ uri: data.img }} rounded size="small" />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.chatText}>
          {data.name}
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: COLORS.theme,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    marginHorizontal: 10,
    color: COLORS.white,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  chatText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.SemiBold,
    textTransform: "capitalize",
  },
});

//make this component available to the app
export default ChatHeader;
