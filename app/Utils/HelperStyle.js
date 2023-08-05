/* eslint-disable prettier/prettier */
import { Dimensions } from "react-native";
import { COLORS } from "../Component/Constant/Color";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

//get width dimension
export const WidthDimension = (value) => {
  return screenWidth * value;
};

//get height dimension
export const HeightDimension = (value) => {
  return screenHeight * value;
};

const baseStyle = {
  textUppercase: {
    textTransform: "uppercase",
  },
  width100: {
    width: "100%",
  },
  width80: {
    width: "80%",
  },
  width60: {
    width: "60%",
  },
  width50: {
    width: "50%",
  },
  width40: {
    width: "40%",
  },
  width45: {
    width: "45%",
  },
  width25: {
    width: "25%",
  },
  width30: {
    width: "30%",
  },
  width20: {
    width: "20%",
  },
  width10: {
    width: "10%",
  },
  displayFlex: {
    display: "flex",
  },
  //alignments
  alignSelfFS: {
    alignSelf: "flex-start",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  alignSelfFE: {
    alignSelf: "flex-end",
  },
  alignSelfStretch: {
    alignSelf: "stretch",
  },

  alignItemsFS: {
    alignItems: "flex-start",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  alignItemsFE: {
    alignItems: "flex-end",
  },

  justifyContentFS: {
    justifyContent: "flex-start",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentFE: {
    justifyContent: "flex-end",
  },
  justifyContentSA: {
    justifyContent: "space-around",
  },
  justifyContentSB: {
    justifyContent: "space-between",
  },
  justifyContentSE: {
    justifyContent: "space-evenly",
  },

  textAlignCenter: {
    textAlign: "center",
  },
  textAlignLeft: {
    textAlign: "left",
  },
  textAlignRight: {
    textAlign: "right",
  },
  textAlignJustify: {
    textAlign: "justify",
  },
  flexDirectionRow: {
    flexDirection: "row",
  },
  displayContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  borderBottom1px: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },

  //margin
  marginTop2px: {
    marginTop: WidthDimension(0.01),
  },
  marginBottom2px: {
    marginBottom: WidthDimension(0.01),
  },
  marginLeft2px: {
    marginLeft: WidthDimension(0.01),
  },
  marginRight2px: {
    marginRight: WidthDimension(0.01),
  },
  margin2px: {
    margin: WidthDimension(0.01),
  },
  marginHorizontal2px: {
    marginHorizontal: WidthDimension(0.01),
  },
  marginVertical2px: {
    marginVertical: WidthDimension(0.01),
  },

  marginTop3px: {
    marginTop: WidthDimension(0.014),
  },
  marginBottom3px: {
    marginBottom: WidthDimension(0.014),
  },
  marginTop4px: {
    marginTop: WidthDimension(0.017),
  },
  marginBottom4px: {
    marginBottom: WidthDimension(0.017),
  },
  marginTop5px: {
    marginTop: WidthDimension(0.02),
  },
  marginBottom5px: {
    marginBottom: WidthDimension(0.02),
  },
  marginLeft5px: {
    marginLeft: WidthDimension(0.02),
  },
  marginRight5px: {
    marginRight: WidthDimension(0.02),
  },
  margin5px: {
    margin: WidthDimension(0.02),
  },
  marginHorizontal5px: {
    marginHorizontal: WidthDimension(0.02),
  },
  marginVertical5px: {
    marginVertical: WidthDimension(0.02),
  },

  marginTop8px: {
    marginTop: WidthDimension(0.03),
  },

  marginTop10px: {
    marginTop: WidthDimension(0.04),
  },
  marginBottom10px: {
    marginBottom: WidthDimension(0.04),
  },
  marginLeft10px: {
    marginLeft: WidthDimension(0.04),
  },
  marginRight10px: {
    marginRight: WidthDimension(0.04),
  },
  margin10px: {
    margin: WidthDimension(0.04),
  },
  marginHorizontal10px: {
    marginHorizontal: WidthDimension(0.04),
  },
  marginVertical10px: {
    marginVertical: WidthDimension(0.04),
  },

  marginTop15px: {
    marginTop: WidthDimension(0.06),
  },
  marginBottom15px: {
    marginBottom: WidthDimension(0.06),
  },
  marginLeft15px: {
    marginLeft: WidthDimension(0.06),
  },
  marginRight15px: {
    marginRight: WidthDimension(0.06),
  },
  margin15px: {
    margin: WidthDimension(0.06),
  },
  marginHorizontal15px: {
    marginHorizontal: WidthDimension(0.06),
  },
  marginVertical15px: {
    marginVertical: WidthDimension(0.06),
  },

  marginTop20px: {
    marginTop: WidthDimension(0.08),
  },
  marginBottom20px: {
    marginBottom: WidthDimension(0.08),
  },
  marginLeft20px: {
    marginLeft: WidthDimension(0.08),
  },
  marginRight20px: {
    marginRight: WidthDimension(0.08),
  },
  margin20px: {
    margin: WidthDimension(0.08),
  },
  marginHorizontal20px: {
    marginHorizontal: WidthDimension(0.08),
  },
  marginVertical20px: {
    marginVertical: WidthDimension(0.08),
  },

  marginTop25px: {
    marginTop: WidthDimension(0.1),
  },
  marginBottom25px: {
    marginBottom: WidthDimension(0.1),
  },
  marginLeft25px: {
    marginLeft: WidthDimension(0.1),
  },
  marginRight25px: {
    marginRight: WidthDimension(0.1),
  },
  margin25px: {
    margin: WidthDimension(0.1),
  },
  marginHorizontal25px: {
    marginHorizontal: WidthDimension(0.1),
  },
  marginVertical25px: {
    marginVertical: WidthDimension(0.1),
  },

  marginTop30px: {
    marginTop: WidthDimension(0.12),
  },

  //======================================//
  //padding
  paddingTop2px: {
    paddingTop: WidthDimension(0.01),
  },
  paddingBottom2px: {
    paddingBottom: WidthDimension(0.01),
  },

  paddingLeft2px: {
    paddingLeft: WidthDimension(0.01),
  },
  paddingRight2px: {
    paddingRight: WidthDimension(0.01),
  },
  padding2px: {
    padding: WidthDimension(0.01),
  },
  paddingHorizontal2px: {
    marginHorizontal: WidthDimension(0.01),
  },
  paddingVertical2px: {
    marginVertical: WidthDimension(0.01),
  },

  paddingTop5px: {
    paddingTop: WidthDimension(0.02),
  },
  paddingBottom5px: {
    paddingBottom: WidthDimension(0.02),
  },
  paddingLeft5px: {
    paddingLeft: WidthDimension(0.02),
  },
  paddingRight5px: {
    paddingRight: WidthDimension(0.02),
  },
  padding5px: {
    padding: WidthDimension(0.02),
  },
  paddingHorizontal5px: {
    marginHorizontal: WidthDimension(0.02),
  },
  paddingVertical5px: {
    marginVertical: WidthDimension(0.02),
  },

  paddingLeft6px: {
    paddingLeft: WidthDimension(0.022),
  },
  paddingRight6px: {
    paddingRight: WidthDimension(0.022),
  },

  paddingTop10px: {
    paddingTop: WidthDimension(0.04),
  },
  paddingBottom10px: {
    paddingBottom: WidthDimension(0.04),
  },
  paddingLeft10px: {
    paddingLeft: WidthDimension(0.04),
  },
  paddingRight10px: {
    paddingRight: WidthDimension(0.04),
  },
  padding8px: {
    padding: WidthDimension(0.03),
  },
  padding10px: {
    padding: WidthDimension(0.04),
  },

  paddingTop12px: {
    paddingTop: WidthDimension(0.05),
  },

  paddingTop15px: {
    paddingTop: WidthDimension(0.06),
  },
  paddingBottom15px: {
    paddingBottom: WidthDimension(0.06),
  },
  paddingLeft15px: {
    paddingLeft: WidthDimension(0.06),
  },
  paddingRight15px: {
    paddingRight: WidthDimension(0.06),
  },
  padding15px: {
    padding: WidthDimension(0.06),
  },

  paddingTop20px: {
    paddingTop: WidthDimension(0.08),
  },
  paddingBottom20px: {
    paddingBottom: WidthDimension(0.08),
  },
  paddingLeft20px: {
    paddingLeft: WidthDimension(0.08),
  },
  paddingRight20px: {
    paddingRight: WidthDimension(0.08),
  },
  padding20px: {
    padding: WidthDimension(0.08),
  },

  paddingBottom30px: {
    paddingBottom: WidthDimension(0.1),
  },
  paddingBottom40px: {
    paddingBottom: WidthDimension(0.12),
  },

  txtStylePoppins: (fontSize, fontColor, fontWeight, lineHeight) => ({
    fontFamily: fonts.Poppins_Bold,
    fontSize: fontSize,
    color: fontColor,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
  }),

  // 700
  txtStylePoppinsBold: (fontSize, fontColor, lineHeight) => ({
    fontFamily: "Poppins-Bold",
    fontSize: fontSize,
    color: fontColor,
    lineHeight: lineHeight,
  }),

  // 600
  txtStylePoppinsSemiBold: (fontSize, fontColor, lineHeight) => ({
    fontFamily: "Poppins-SemiBold",
    fontSize: fontSize,
    color: fontColor,
    lineHeight: lineHeight,
  }),

  // 500
  txtStylePoppinsMedium: (fontSize, fontColor, lineHeight) => ({
    fontFamily: "Poppins-Medium",
    fontSize: fontSize,
    color: fontColor,
    lineHeight: lineHeight,
  }),

  // 400
  txtStylePoppinsRegular: (fontSize, fontColor, lineHeight) => ({
    fontFamily: "Poppins-Regular",
    fontSize: fontSize,
    color: fontColor,
    lineHeight: lineHeight,
  }),
  //custom shadow
  shadowBlack: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
};

// Flex Styles
const flex = (flexValue) => {
  return {
    flex: flexValue,
  };
};

const flexGrow = (flexValue) => {
  return {
    flexGrow: flexValue,
  };
};

const flexDirection = (flexDirectionValue) => {
  return {
    flexDirection: flexDirectionValue,
  };
};

const paddingCustom = (horizontalValue, verticalValue) => {
  return {
    paddingHorizontal: horizontalValue,
    paddingVertical: verticalValue,
  };
};

const marginCustom = (horizontalValue, verticalValue) => {
  return {
    marginHorizontal: horizontalValue,
    marginVertical: verticalValue,
  };
};
const justView = (styleLabel, styleValue) => {
  return {
    [styleLabel]: styleValue,
  };
};

const textView = (
  sizeValue,
  weightValue,
  colorValue,
  alignValue,
  textTransformValue
) => {
  return {
    color: colorValue,
    fontFamily: "Poppins-SemiBold",
    fontSize: sizeValue,
    fontWeight: weightValue,
    textAlign: alignValue,
    textTransform: textTransformValue,
  };
};

// Other Styles
const justifyContentCenteredView = (justifyContentValue) => {
  return {
    justifyContent: justifyContentValue,
    alignItems: "center",
  };
};

const fonts = {
  Poppins_Regular: "Poppins-Regular",
  Poppins_Black: "Poppins-Black",
  Poppins_Bold: "Poppins-Bold",
  Poppins_Medium: "Poppins-Medium",
  Poppins_SemiBold: "Poppins-SemiBold",
};

const fontSize = {
  //font sizes
  font8px: {
    fontSize: WidthDimension(0.02),
  },
  font10px: {
    fontSize: WidthDimension(0.026),
  },
  font11px: {
    fontSize: WidthDimension(0.028),
  },
  font12px: {
    fontSize: WidthDimension(0.03),
  },
  font13px: {
    fontSize: WidthDimension(0.031),
  },
  font14px: {
    fontSize: WidthDimension(0.034),
  },
  font15px: {
    fontSize: WidthDimension(0.036),
  },
  font16px: {
    fontSize: WidthDimension(0.038),
  },
  font18px: {
    fontSize: WidthDimension(0.043),
  },
  font20px: {
    fontSize: WidthDimension(0.047),
  },
  font22px: {
    fontSize: WidthDimension(0.05),
  },
  font24px: {
    fontSize: WidthDimension(0.055),
  },
  font26px: {
    fontSize: WidthDimension(0.06),
  },
};

const fontsWeightCom = {
  font_400: "400",
  font_500: "500",
  font_600: "600",
  font_700: "700",
  font_800: "800",
  font_900: "900",
};

export {
  baseStyle,
  paddingCustom,
  marginCustom,
  flexDirection,
  flex,
  justifyContentCenteredView,
  fonts,
  textView,
  justView,
  flexGrow,
  fontsWeightCom,
  fontSize,
};
