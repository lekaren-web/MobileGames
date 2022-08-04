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
export default function HomeScreen() {
  useEffect(() => {
    async function getGenre() {
      const models = await DataStore.query(Genres);
      console.log(models);
      setGenres(models)
    }
    getGenre()
  }, []);
  const [genres, setGenres] = useState([]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView>
        <View>
          <Text style={styles.header}>Select a genre</Text>
        </View>
        <View style={styles.container}>
          {genres ? (
            genres.map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.component1, styles.shadowProp]}
                >
                  <ImageBackground
                    source={{uri: e.image}}
                    resizeMode="cover"
                    style={styles.coverImage}
                    blurRadius={0.6}
                    imageStyle={{ opacity: 0.5 }}
                  >
                    <View style={styles.overlay}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: 26,
                          color: "white",
                          letterSpacing: 4,
                        }}
                      >
                        {e.name}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              );
            })
          ) : (
            <View>
              <Text>No Genres</Text>
            </View>
          )}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
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
    color: "white",
    marginTop: 10,
    display: "none",
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
