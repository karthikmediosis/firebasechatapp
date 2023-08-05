import { Icon } from "native-base";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../Constant/Color";
import { FONTS } from "../Constant/Font";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import Auth from "../../Service/Auth";
import { removeUser } from "../../Redux/reducer/user";
import Navigation from "../../Service/Navigation";
import { commonStrings } from "../../Utils/Strings";
import { baseStyle } from "../../Utils/HelperStyle";

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
    <View style={styles.mainHomeHeader}>
      <Text style={styles.logo}>{commonStrings.firebaseTitle}</Text>
      <View style={[baseStyle.flexDirectionRow, baseStyle.alignItemsCenter]}>
        <TouchableOpacity onPress={handleToLogout}>
          <AntDesign name="logout" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// { flexDirection: "row", alignItems: "center" }

export default HomeHeader;

const styles = StyleSheet.create({
  mainHomeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.green,
    elevation: 2,
    paddingVertical: 15,
  },
  logo: {
    fontFamily: FONTS.Bold,
    color: COLORS.white,
    fontSize: 22,
  },
});
