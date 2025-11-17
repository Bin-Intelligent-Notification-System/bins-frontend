import { BinType, MaterialIconName } from "./model";

export const BIN_TYPE_ICONS: Record<BinType, MaterialIconName> = {
    TRASH : "delete",
    RECYCLING : "recycling",
    COMPOST : "compost"
}

export const POPULARITY_STARS: Record<string, number> = {
  SLOW: 1,
  MEDIUM: 2,
  FAST: 3,
};
