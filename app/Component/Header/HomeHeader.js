import { Icon } from "native-base";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../Constant/Color";
import { FONTS } from "../Constant/Font";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import Auth from "../../Service/Auth";
import { removeUser } from "../../Redux/reducer/user";
import Navigation from "../../Service/Navigation";

const HomeHeader = () => {
  const { userData } = useSelector((state) => state.User);
  const dispatch = useDispatch();

  //handleToLogout
  const handleToLogout = async () => {
    dispatch(removeUser());
    await Auth.logout();
    Navigation.navigate("Login");
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        paddingHorizontal: 15,
        backgroundColor: COLORS.white,
        elevation: 2,
        paddingVertical: 15,
      }}
    >
      <Text style={styles.logo}>FireBase Chat App</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={styles.but} onPress={handleToLogout}>
          <AntDesign name="logout" size={20} color={COLORS.green} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  logo: {
    fontFamily: FONTS.Bold,
    color: COLORS.theme,
    fontSize: 22,
  },
});
