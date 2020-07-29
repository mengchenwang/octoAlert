import React, { useState, useEffect } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Audio, AVPlaybackStatus } from "expo-av";

import Button from "./Button";

const alert = require("./assets/octoalert.mp3");
const soundObject = new Audio.Sound();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    setIsLoaded(status && status.isLoaded ? true : false);
    setIsPlaying(status && status.isLoaded && status.isPlaying ? true : false);
  };

  useEffect(() => {
    const loadSound = async () => {
      soundObject.loadAsync(alert);
      soundObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    };
    loadSound();
  }, []);

  const playSound = async () => {
    if (isPlaying) {
      await soundObject.stopAsync();
    } else {
      if (isLoaded) {
        await soundObject.playAsync();
      }
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.background}
      >
        <Button onPress={playSound} isPlaying={isPlaying} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
});
