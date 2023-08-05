import React, { useEffect, useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useSelector } from "react-redux";
import { COLORS } from "../../Component/Constant/Color";
import HomeHeader from "../../Component/Header/HomeHeader";
import Navigation from "../../Service/Navigation";
import database from "@react-native-firebase/database";
import Feather from "react-native-vector-icons/Feather";
import { baseStyle } from "../../Utils/HelperStyle";
import moment from "moment-timezone";
import { commonStrings } from "../../Utils/Strings";

const Home = () => {
  const { userData } = useSelector((state) => state.User);

  const [chatList, setchatList] = useState([]);

  // getChatlist
  useEffect(() => {
    getChatlist();
  }, []);

  //getchatList
  const getChatlist = async () => {
    database()
      .ref("/chatlist/" + userData?.id)
      .on("value", (snapshot) => {
        // console.warn("User data: ", Object.values(snapshot.val()));
        if (snapshot.val() != null) {
          setchatList(Object.values(snapshot.val()));
        }
      });
  };

  //changeTimeFormat
  const changeTimeFormat = (val) => {
    const dateTimeString = val;
    const timeOnly = moment(dateTimeString)
      .tz("Asia/Kolkata")
      .format("hh:mm:ss A");
    return timeOnly;
  };

  // handleSingleChat
  const handleSingleChat = (list) => {
    Navigation.navigate("SingleChat", { receiverData: list });
  };
  // handleAllUser
  const handleAllUser = (list) => {
    Navigation.navigate("AllUser");
  };

  // handleRenderItem
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleSingleChat(item)}
      style={[baseStyle.shadowBlack, styles.cardContainer]}
    >
      <Text
        style={[
          baseStyle.txtStylePoppinsSemiBold(15, COLORS.black, 18),
          baseStyle.marginBottom3px,
        ]}
      >
        {commonStrings.name} : {item.name}
      </Text>
      <View style={[baseStyle.flexDirectionRow, baseStyle.justifyContentSB]}>
        <Text style={[baseStyle.txtStylePoppinsRegular(15, COLORS.black, 14)]}>
          {commonStrings.lsgMsg} :{item.lastMsg}
        </Text>
        <Text style={[baseStyle.txtStylePoppinsBold(15, COLORS.green, 20)]}>
          {changeTimeFormat(item.sendTime)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  //EmptyListMessage
  const EmptyListMessage = () => {
    return (
      <Text style={[baseStyle.txtStylePoppinsSemiBold(10, COLORS.black, 14)]}>
        {commonStrings.noRecordFound}
      </Text>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.green} />
      <HomeHeader />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={chatList}
        renderItem={renderItem}
        ListEmptyComponent={EmptyListMessage}
      />
      <TouchableOpacity style={styles.but} onPress={handleAllUser}>
        <Feather name="users" size={20} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "gray",
  },
  cardContainer: {
    padding: 10,
    backgroundColor: COLORS.white,
    margin: 10,
    borderRadius: 5,
  },
  but: {
    position: "absolute",
    bottom: 15,
    right: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.theme,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
