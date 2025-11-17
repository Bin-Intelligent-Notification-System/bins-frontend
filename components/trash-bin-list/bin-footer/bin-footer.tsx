import { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";
import { BinPopularity } from "./bin-popularity";
import { BinTypeContainer } from "./bin-type-container";
import { LAST_UPDATED_MESSAGE } from "./constants";
import { BinFooterProps } from "./model";

export const BinFooter: FC<BinFooterProps> = ({
  type,
  statusColor,
  formattedLastUpdated,
  popularity,
}) => {
  return (
    <View style={styles.footerRow}>
      <BinTypeContainer type={type} statusColor={statusColor} />
      <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
        <BinPopularity statusColor={statusColor} popularity={popularity} />
        <Text style={styles.metaText}>
          {`${LAST_UPDATED_MESSAGE} ${formattedLastUpdated}`}
        </Text>
      </View>
    </View>
  );
};
