import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { DataStore } from "@aws-amplify/datastore";
import { Genres } from "./src/models";
export default function Racing(props) {
  useEffect(() => {
    async function getGenre() {
      const models = await DataStore.query(Genres);
       
      setGenres(models);
    }
    getGenre();
  }, []);
  const [genres, setGenres] = useState([]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View>
          <Text style={styles.header}>Racing</Text>
        </View>
          <StatusBar style="auto" />
      </ScrollView>
      <TouchableOpacity onPress={() => {
          props.navigation.navigate('HomeScreen')
      }}>
          <Text>Back</Text>
      </TouchableOpacity>
      {/* hide nav for now */}
      {/* <View style={styles.nav}>
        <Text>Nav</Text>
        <Text>Nav</Text>
        <Text>Nav</Text>
        <Text>Nav</Text>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    display: "flex",
    padding: 5,
  },
  nav: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "static",
    bottom: -30,
    backgroundColor: "#fff",
    height: 60,
    padding: 20,
    paddingRight: 25,
    paddingLeft: 25,
  },
  component1: {
    backgroundColor: "#000",
    borderRadius: 8,
    width: "100%",
    marginVertical: 10,
    height: 150,
    overflow: "hidden",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    color: "black",
    marginTop: 10,
  },
  coverImage: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  overlay: {
    // backgroundColor:'rgba(255,0,0,0.5)',
  },
});
