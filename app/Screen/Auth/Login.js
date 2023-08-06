import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { CardItem, Icon } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS } from "../../Component/Constant/Color";
import { FONTS } from "../../Component/Constant/Font";
import Navigation from "../../Service/Navigation";
import database from "@react-native-firebase/database";
import SimpleToast from "react-native-simple-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/reducer/user";
import Auth from "../../Service/Auth";
import { commonStrings } from "../../Utils/Strings";
import { baseStyle } from "../../Utils/HelperStyle";

const { height } = Dimensions.get("window");

function Login() {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");

  const loginUser = async () => {
    database()
      .ref("users/")
      .orderByChild("emailId")
      .equalTo(email)
      .once("value")
      .then(async (snapshot) => {
        if (snapshot.val() == null) {
          SimpleToast.show("Invaid Email Id");
          return false;
        }
        let userData = Object.values(snapshot.val())[0];

        console.log("User data: ", userData);
        dispatch(setUser(userData));
        await Auth.setAccount(userData);
        SimpleToast.show("Login Successfully!");
      });
  };

  //handleRegister
  const handleRegister = () => {
    Navigation.navigate("Register");
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        backgroundColor={COLORS.theme}
        barStyle="light-content"
        hidden={false}
      />
      <View style={styles.uppercard}>
        <Text style={[baseStyle.txtStylePoppinsBold(25, COLORS.white, 30)]}>
          {commonStrings.firebaseTitle}
        </Text>
      </View>
      <View style={styles.cardMainContainer}>
        <View style={[baseStyle.shadowBlack, styles.cardBoxShadow]}>
          <CardItem style={styles.cardView}>
            <View style={[baseStyle.flex1]}>
              <Text style={styles.Login}>{commonStrings.login}</Text>
              <Text style={styles.smallTxt}>{commonStrings.logincontent}</Text>
              <KeyboardAwareScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              >
                <View style={[styles.inputContainer, baseStyle.marginTop10px]}>
                  <View style={styles.inputIconView}>
                    <Icon
                      name="gmail"
                      type="MaterialCommunityIcons"
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        textAlign: "center",
                      }}
                    />
                  </View>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Enter Email Id"
                    keyboardType="email-address"
                    underlineColorAndroid="transparent"
                    onChangeText={(value) => {
                      setemail(value);
                    }}
                    value={email}
                    placeholderTextColor={COLORS.liteBlack}
                  />
                </View>
              </KeyboardAwareScrollView>

              <TouchableOpacity style={styles.loginBtn} onPress={loginUser}>
                <Text style={styles.btnText}>{commonStrings.loginNow}</Text>
              </TouchableOpacity>

              <View style={styles.contactView}>
                <Text style={styles.smallTxt}>{commonStrings.newUser}</Text>
                <TouchableOpacity
                  style={baseStyle.marginLeft5px}
                  onPress={handleRegister}
                >
                  <Text style={styles.register}>{commonStrings.register}</Text>
                </TouchableOpacity>
              </View>
              <View></View>
            </View>
          </CardItem>
        </View>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: COLORS.white },
  uppercard: {
    height: height / 4,
    backgroundColor: COLORS.theme,
    borderBottomLeftRadius: height / 8,
    justifyContent: "center",
    alignItems: "center",
  },

  //card
  cardMainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardBoxShadow: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 15,
  },

  logo: {
    height: height / 2 - 50,
    width: "95%",
    resizeMode: "cover",
    borderRadius: 13,
  },
  loginBtn: {
    height: 48,
    width: "95%",
    backgroundColor: COLORS.theme,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  loginText: {
    color: COLORS.lightgray,
    fontSize: 18,
    fontFamily: FONTS.Regular,
  },
  buttonSec: { marginTop: 20, justifyContent: "center", alignItems: "center" },
  logo: {
    height: height / 2 - 50,
    width: "95%",
    resizeMode: "cover",
    borderRadius: 13,
  },

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
    marginBottom: 10,
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
  smallTxt: {
    fontSize: 13,
    color: COLORS.black,
    fontFamily: FONTS.Regular,
    marginTop: 10,
    opacity: 0.5,
    textAlign: "center",
  },
  register: {
    fontSize: 13,
    fontFamily: FONTS.SemiBold,
    marginTop: 12,
    textAlign: "center",
    color: COLORS.textInput,
    textDecorationLine: "underline",
  },
  contactView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btnText: {
    color: "#fff",
    fontFamily: FONTS.SemiBold,
    fontSize: 14,
    marginTop: 2,
  },
  btn: {
    backgroundColor: COLORS.theme,
    width: "100%",
    height: 50,
    borderRadius: 30,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Login: {
    alignSelf: "center",
    fontFamily: FONTS.Medium,
    color: COLORS.textInput,
    fontSize: 20,
    marginTop: 10,
  },
  cardView: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingBottom: 20,
    paddingTop: 20,
  },
});
