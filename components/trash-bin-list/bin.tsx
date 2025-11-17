import { BinCardProps } from "@/components/trash-bin-list/model";
import { useBinStyles } from "@/hooks/use-get-bins/useBinStyles";
import React, { FC } from "react";
import { View } from "react-native";
import { BinFooter } from "./bin-footer/bin-footer";
import { BinHeader } from "./bin-header";
import { BinPorgressBar } from "./bin-progress-bar";
import { styles } from "./styles";

export const BinCard: FC<BinCardProps> = ({ bin }) => {
  const {
    fillPercent,
    barColor,
    statusColor,
    statusLabel,
    formattedLastUpdated,
  } = useBinStyles(bin);

  return (
    <View
      style={[styles.card, { borderWidth: 1.75, borderColor: statusColor }]}
    >
      <BinHeader
        name={bin?.name}
        location={bin?.location}
        statusColor={statusColor}
        statusLabel={statusLabel}
      />
      <BinPorgressBar barColor={barColor} fillPercent={fillPercent} />
      <BinFooter
        type={bin?.type}
        statusColor={statusColor}
        formattedLastUpdated={formattedLastUpdated}
        popularity={bin?.popularity}
      />
    </View>
  );
};
