import { Text, View } from "react-native";
import { Button } from "../components/Button";
import { ScreenDisplay } from "../components/ScreenDisplay";
import { useCalculator } from "../hooks/useCalculator";

export default function Index() {
  const calculator = useCalculator();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button
        text="Press Me"
        size="large"
        theme="primary"
        onPress={() => alert("Button Pressed!")}
      />

      <ScreenDisplay value="12345" />
    </View>
  );
}
