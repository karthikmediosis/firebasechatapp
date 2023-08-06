import React from "react";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../Constant/Color";
import { TextInput, View } from "react-native";

const CommonInput = ({
  placeholder,
  onChangeText,
  value,
  keyboardType = "default",
  iconName = "mail",
}) => {
  return (
    <View style={[styles.inputContainer]}>
      <View style={styles.inputIconView}>
        <AntDesign name={iconName} size={20} color={COLORS.white} />
      </View>
      <TextInput
        style={styles.inputs}
        placeholder={placeholder}
        keyboardType={keyboardType}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={COLORS.liteBlack}
      />
    </View>
  );
};
export default CommonInput;
