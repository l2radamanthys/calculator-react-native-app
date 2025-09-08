import { StyleSheet, Text } from "react-native";

function ScreenDisplay({ value, theme }: { value: string; theme?: string }) {
  const displayStyles = [styles.displayValue];
  if (theme === "dark") {
    displayStyles.push(styles.displayValueDark);
  }

  return (
    <Text style={displayStyles}>{parseFloat(value).toLocaleString()}</Text>
  );
}

const styles = StyleSheet.create({
  displayValue: {
    color: "#000",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  displayValueDark: {
    color: "#fff",
  },
});

export { ScreenDisplay };
