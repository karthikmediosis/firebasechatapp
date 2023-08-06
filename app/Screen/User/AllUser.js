import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../Component/Constant/Color";
import { FONTS } from "../../Component/Constant/Font";
import database from "@react-native-firebase/database";
import { useSelector } from "react-redux";
import Navigation from "../../Service/Navigation";
import uuid from "react-native-uuid";
import HomeHeader from "../../Component/Header/HomeHeader";
import { Text } from "react-native";
import { baseStyle, flex } from "../../Utils/HelperStyle";
import moment from "moment-timezone";
import { commonStrings } from "../../Utils/Strings";

const AllUser = () => {
  const { userData } = useSelector((state) => state.User);
  const [allUser, setallUser] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);
  useEffect(() => {
    getChatlist();
  }, []);

  // //getchatList
  const getChatlist = async (userList) => {
    database()
      .ref("/chatlist/" + userData?.id)
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          const chatlist = Object.values(snapshot.val());

          // setchatList(dataArray);
          // setLoader(false);
          const chatlistMap = new Map(
            chatlist.map((item) => [item.emailId, item])
          );
          if (userList) {
            var updateData = userList.map((user) => {
              const chatUser = chatlistMap.get(user.emailId);
              if (chatUser) {
                return {
                  ...user,
                  lastMsg: chatUser.lastMsg,
                  sendTime: chatUser.sendTime,
                };
              }
              return user;
            });

            updateData.sort(
              (a, b) => new Date(b.sendTime) - new Date(a.sendTime)
            );
            setallUser(updateData);
          }
        } else {
          setallUser(userList);
        }
      });
  };

  // getAllUser
  const getAllUser = () => {
    database()
      .ref("users/")
      .once("value")
      .then((snapshot) => {
        let userList = Object.values(snapshot.val()).filter(
          (it) => it.id != userData.id
        );
        if (userList.length > 0) {
          getChatlist(userList);
        }
      });
  };

  // createChatList
  const createChatList = (data) => {
    database()
      .ref("/chatlist/" + userData.id + "/" + data.id)
      .once("value")
      .then((snapshot) => {
        if (snapshot.val() == null) {
          let roomId = uuid.v4();
          let myData = {
            roomId,
            id: userData.id,
            name: userData.name,
            img: userData.img,
            emailId: userData.emailId,
            about: userData.about,
            lastMsg: "",
          };
          database()
            .ref("/chatlist/" + data.id + "/" + userData.id)
            .update(myData)
            .then(() => console.log("Data updated."));

          delete data["password"];
          data.lastMsg = "";
          data.roomId = roomId;
          database()
            .ref("/chatlist/" + userData.id + "/" + data.id)
            .update(data)
            .then(() => console.log("Data updated."));

          Navigation.navigate("SingleChat", { receiverData: data });
        } else {
          Navigation.navigate("SingleChat", { receiverData: snapshot.val() });
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

  //EmptyListMessage
  const EmptyListMessage = () => {
    return (
      <Text
        style={[
          baseStyle.txtStylePoppinsSemiBold(12, COLORS.black, 14),
          baseStyle.textAlignCenter,
          baseStyle.padding10px,
          baseStyle.justifyContentCenter,
          baseStyle.alignItemsCenter,
          baseStyle.displayFlex,
        ]}
      >
        {commonStrings.noRecordFound}
      </Text>
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[baseStyle.shadowBlack, styles.cardContainer]}
      onPress={() => createChatList(item)}
    >
      <View style={[styles.allUsersContainer]}>
        <View style={styles.userImgRound}>
          <Image
            source={{ uri: item.img }}
            resizeMode="cover"
            style={styles.imageContainer}
          />
        </View>
        <View style={[baseStyle.marginLeft2px, baseStyle.flex1]}>
          <Text
            style={[baseStyle.txtStylePoppinsSemiBold(15, COLORS.black, 18)]}
          >
            {" "}
            Name: {item.name}
          </Text>
          {item.lastMsg && (
            <View
              style={[
                baseStyle.flexDirectionRow,
                baseStyle.justifyContentSB,
                ,
              ]}
            >
              <Text
                style={[baseStyle.txtStylePoppinsRegular(15, COLORS.black, 20)]}
              >
                {commonStrings.lsgMsg} :{item.lastMsg}
              </Text>
              <Text
                style={[baseStyle.txtStylePoppinsBold(15, COLORS.green, 20)]}
              >
                {changeTimeFormat(item.sendTime)}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <HomeHeader />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={allUser}
        renderItem={renderItem}
        ListEmptyComponent={EmptyListMessage}
      />
    </View>
  );
};

export default AllUser;

const styles = StyleSheet.create({
  searchContainer: {
    elevation: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
  },
  searchInput: {
    fontSize: 15,
    fontFamily: FONTS.Regular,
    color: COLORS.black,
    opacity: 0.7,
  },
  cardContainer: {
    padding: 10,
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
  },

  listStyle: { paddingVertical: 7, marginVertical: 2 },

  //allUsersContainer
  allUsersContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },

  userImgRound: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
  },
});
