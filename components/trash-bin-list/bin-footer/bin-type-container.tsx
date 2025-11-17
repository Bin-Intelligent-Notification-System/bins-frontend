import { MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, View } from "react-native";
import { BIN_TYPE_ICONS } from "../constants";
import { styles } from "../styles";
import { BIN_TYPE_MESSAGE } from "./constants";
import { BinTypeContainerProps } from "./model";

export const BinTypeContainer: FC<BinTypeContainerProps> = ({
  type,
  statusColor,
}) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={styles.metaText}>{BIN_TYPE_MESSAGE}</Text>
      <View style={{ width: 6 }} />
      <MaterialIcons
        name={BIN_TYPE_ICONS?.[type]}
        size={19}
        color={statusColor}
      />
    </View>
  );
};
