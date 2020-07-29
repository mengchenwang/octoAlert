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
}

const Button = ({ onPress }: props) => {
  const [pressed, setPressed] = useState(false);
  const [on, setOn] = useState(false);

  const handlePress = (event: GestureResponderEvent) => {
    setOn(!on);
    onPress(event);
  };

  return (
    <TouchableHighlight
      underlayColor="none"
      activeOpacity={1}
      onPress={handlePress}
      onHideUnderlay={() => setPressed(false)}
      onShowUnderlay={() => setPressed(true)}
    >
      <View>
        <Image
          style={pressed ? styles.buttonPress : styles.button}
          source={on ? image.on : image.off}
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
    width: 250,
    height: 250,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
