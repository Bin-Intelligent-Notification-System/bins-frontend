import { MaterialIcons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { BinPopularityEnum } from "./bin-footer/model";

export type MaterialIconName = ComponentProps<typeof MaterialIcons>["name"];
export type BinCardProps = {
  bin: Bin;
};


export type BinType = "TRASH" | "RECYCLING" | "COMPOST";

export type Bin = {
  uuid: string;
  name: string;
  location: string;
  type: BinType;           
  popularity: BinPopularityEnum;
  status: string | null;
  totalCapacity: number;
  currentLevel: number;
  lastUpdated: string; 
};

export type BinHeaderProps = {
    name: string,
    location: string,
    statusColor: string,
    statusLabel: string
}
