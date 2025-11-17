import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const ErrorBanner = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <View style={styles.container}>
      <MaterialIcons name="error-outline" size={20} color="white" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};
