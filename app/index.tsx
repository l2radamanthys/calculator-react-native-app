import { Row } from "@/components/Row";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button } from "../components/Button";
import { ScreenDisplay } from "../components/ScreenDisplay";
import { useCalculator } from "../hooks/useCalculator";

export default function Index() {
  const { handlePress, currentValue: result } = useCalculator();
  const theme: string = "dark";
  const containerStyles = [styles.container];

  return (
    <View style={containerStyles}>
      <SafeAreaView>
        <ScreenDisplay value={result} theme={theme} />
        <Row>
          <Button
            text="C"
            type="accent"
            theme={theme}
            onPress={() => handlePress("clear")}
          />
          <Button
            text="CE"
            type="accent"
            theme={theme}
            onPress={() => handlePress("clear-entry")}
          />
          <Button
            text="%"
            type="secondary"
            theme={theme}
            onPress={() => handlePress("percent")}
          />
          <Button
            text="/"
            type="secondary"
            theme={theme}
            onPress={() => handlePress("divide")}
          />
        </Row>
        <Row>
          <Button text="7" theme={theme} onPress={() => handlePress("7")} />
          <Button text="8" theme={theme} onPress={() => handlePress("8")} />
          <Button text="9" theme={theme} onPress={() => handlePress("9")} />
          <Button
            text="x"
            type="secondary"
            theme={theme}
            onPress={() => handlePress("multiply")}
          />
        </Row>
        <Row>
          <Button text="4" theme={theme} onPress={() => handlePress("4")} />
          <Button text="5" theme={theme} onPress={() => handlePress("5")} />
          <Button text="6" theme={theme} onPress={() => handlePress("6")} />
          <Button
            text="-"
            type="secondary"
            theme={theme}
            onPress={() => handlePress("minus")}
          />
        </Row>
        <Row>
          <Button text="3" theme={theme} onPress={() => handlePress("3")} />
          <Button text="2" theme={theme} onPress={() => handlePress("2")} />
          <Button text="1" theme={theme} onPress={() => handlePress("1")} />
          <Button
            text="+"
            type="secondary"
            theme={theme}
            onPress={() => handlePress("plus")}
          />
        </Row>
        <Row>
          <Button
            text="+/-"
            theme={theme}
            onPress={() => handlePress("plus-minus")}
          />
          <Button text="0" theme={theme} onPress={() => handlePress("0")} />
          <Button text="." theme={theme} onPress={() => handlePress(".")} />
          <Button
            text="="
            type="accent"
            theme={theme}
            onPress={() => handlePress("equals")}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  light: {
    backgroundColor: "#f5f5f5",
  },
});
