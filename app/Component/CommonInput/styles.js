/* eslint-disable prettier/prettier */

import { StyleSheet } from "react-native";
import { FONTS } from "../Constant/Font";
import { COLORS } from "../Constant/Color";

const styles = StyleSheet.create({
  inputs: {
    borderBottomColor: COLORS.white,
    flex: 1,
    color: COLORS.liteBlack,
    paddingLeft: 10,
    fontFamily: FONTS.Regular,
  },
  inputContainer: {
    borderRadius: 30,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    marginBottom: 15,
    elevation: 2,
  },
  inputIconView: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.theme,
    height: "100%",
    borderRadius: 30,
    alignSelf: "center",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 2,
  },
});

export default styles;
