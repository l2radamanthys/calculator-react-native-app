import { StyleSheet, View } from "react-native";

function Row({ children }: { children: React.ReactNode }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export { Row };
