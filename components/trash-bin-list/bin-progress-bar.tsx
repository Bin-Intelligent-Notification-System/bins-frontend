import React, { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const BinPorgressBar: FC<{
  barColor: string;
  fillPercent: number;
}> = ({ barColor, fillPercent }) => {
  return (
    <View style={styles.progressRow}>
      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            { width: `${fillPercent}%`, backgroundColor: barColor },
          ]}
        />
      </View>
      <Text style={styles.percentText}>{fillPercent}%</Text>
    </View>
  );
};
