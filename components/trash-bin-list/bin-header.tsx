import { Feather } from "@expo/vector-icons";
import { FC } from "react";
import { Text, View } from "react-native";
import { BinHeaderProps } from "./model";
import { styles } from "./styles";

export const BinHeader: FC<BinHeaderProps> = ({
  name,
  location,
  statusColor,
  statusLabel,
}) => {
  return (
    <View style={styles.headerRow}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{location}</Text>
      </View>

      <View style={[styles.statusPill, { borderColor: statusColor }]}>
        <Feather name="check-circle" size={14} color={statusColor} />
        <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
        <Text style={[styles.statusText, { color: statusColor }]}>
          {statusLabel}
        </Text>
      </View>
    </View>
  );
};
