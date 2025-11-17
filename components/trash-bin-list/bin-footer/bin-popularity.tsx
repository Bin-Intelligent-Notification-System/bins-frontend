import { MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import { View } from "react-native";
import { BinPopularityEnum } from "./model";
import { getPopularityStars } from "./utils";

export const BinPopularity: FC<{
  statusColor: string;
  popularity: BinPopularityEnum;
}> = ({ statusColor, popularity }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      {[...Array(3)].map((_, i) => (
        <MaterialIcons
          key={i}
          name={i < getPopularityStars(popularity) ? "star" : "star-border"}
          size={16}
          color={statusColor}
          style={{ marginRight: 2 }}
        />
      ))}
    </View>
  );
};
