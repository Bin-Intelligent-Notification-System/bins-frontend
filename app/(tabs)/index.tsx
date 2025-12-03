import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BinList } from "@/components/trash-bin-list/bin-list";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ffffffff", dark: "#000000ff" }}
      headerImage={
        <Image
          source={require("@/assets/images/bins-logo.png")}
          style={styles.binsLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">BINS</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Trash Bins</ThemedText>
      </ThemedView>
      <BinList />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  binsLogo: {
    height: 250,
    width: 420,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
