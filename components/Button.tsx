import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

function Button({
  text,
  type,
  theme,
  onPress,
}: {
  text: string;
  type?: string;
  theme: string;
  onPress: () => void;
}) {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  switch (type) {
    case "secondary":
      buttonStyles.push(styles.buttonSecondary);
      textStyles.push(styles.textSecondary);
      break;
    case "accent":
      buttonStyles.push(styles.buttonAccent);
      break;
    default:
      break;
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
}

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  textSecondary: {
    color: "#060606",
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#ffc107",
  },
});

export { Button };
