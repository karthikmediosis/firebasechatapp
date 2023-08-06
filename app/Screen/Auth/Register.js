import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Container, Card, CardItem, Icon } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS } from "../../Component/Constant/Color";
import { FONTS } from "../../Component/Constant/Font";
import Navigation from "../../Service/Navigation";
import uuid from "react-native-uuid";
import SimpleToast from "react-native-simple-toast";
import database from "@react-native-firebase/database";
import CommonInput from "../../Component/CommonInput";
import { baseStyle } from "../../Utils/HelperStyle";
import { commonStrings } from "../../Utils/Strings";

const { width, height } = Dimensions.get("window");

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [about, setabout] = useState("");

  const registerUser = async () => {
    if (email == "" || about == "" || name == "") {
      SimpleToast.show("Fill in all the fields!");
      return false;
    }
    let data = {
      id: uuid.v4(),
      emailId: email,
      about: about,
      name: name,
      sendTime: new Date(),
      img: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
    };
    database()
      .ref("/users/" + data.id)
      .set(data)
      .then(() => {
        SimpleToast.show("Register Successfully!");
        setname("");
        setemail("");
        setabout("");
        Navigation.navigate("Login");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // handleLogin
  const handleLogin = () => {
    Navigation.navigate("Login");
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

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <KeyboardAwareScrollView
          style={{ marginTop: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <Card
            style={{
              backgroundColor: "#fff",
              width: width - 30,
              borderRadius: 15,
            }}
          >
            <CardItem style={styles.cardView}>
              <View style={{ flex: 1 }}>
                <Text style={styles.Login}>{commonStrings.registerTitle}</Text>
                <Text style={styles.smallTxt}>{commonStrings.registercon}</Text>

                <CommonInput
                  placeholder="Enter Email Id"
                  keyboardType="email-address"
                  onChangeText={(value) => {
                    setemail(value);
                  }}
                  value={email}
                />
                <CommonInput
                  placeholder="Enter Name"
                  onChangeText={(value) => setname(value)}
                  value={name}
                  iconName="user"
                />
                <CommonInput
                  placeholder="Enter About"
                  onChangeText={(value) => setabout(value)}
                  value={about}
                  iconName="infocirlce"
                />

                <TouchableOpacity
                  style={styles.btn}
                  onPress={registerUser}
                  // onPress={() => Navigation.navigate('AppStack')}
                >
                  <Text style={styles.btnText}>{commonStrings.register}</Text>
                </TouchableOpacity>

                <View style={styles.contactView}>
                  <Text style={styles.smallTxt}>{commonStrings.existing}</Text>
                  <TouchableOpacity
                    style={baseStyle.marginLeft5px}
                    onPress={handleLogin}
                  >
                    <Text style={styles.register}>
                      {commonStrings.loginNow}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View></View>
              </View>
            </CardItem>
          </Card>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
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
