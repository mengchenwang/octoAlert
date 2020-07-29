import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  GestureResponderEvent,
} from "react-native";

const image = {
  on: require("./assets/octoalert.png"),
  off: require("./assets/octoalert_blue.png"),
};

interface props {
  onPress: (event: GestureResponderEvent) => void;
  isPlaying: boolean;
}

const Button = ({ onPress, isPlaying }: props) => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableHighlight
      underlayColor="none"
      activeOpacity={1}
      onPress={onPress}
      onHideUnderlay={() => setPressed(false)}
      onShowUnderlay={() => setPressed(true)}
    >
      <View>
        <Image
          style={pressed ? styles.buttonPress : styles.button}
          source={isPlaying ? image.on : image.off}
        />
      </View>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 280,
    height: 280,
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  buttonPress: {
    width: 260,
    height: 260,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
