import { POPULARITY_STARS } from "../constants";
import { BinPopularityEnum } from "./model";

export const getPopularityStars = (popularity: BinPopularityEnum) =>
  POPULARITY_STARS[popularity] ?? 0;
