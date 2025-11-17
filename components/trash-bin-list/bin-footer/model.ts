import { BinType } from "../model";

export type BinProgressBarProps = {
    type: BinType,
    statusColor: string
}

export type BinTypeContainerProps = {
    type: BinType,
    statusColor: string,
}

export type BinFooterProps = {
    type: BinType,
    statusColor: string,
    formattedLastUpdated: string,
    popularity: BinPopularityEnum
};

export enum BinPopularityEnum {"SLOW", "MEDIUM", "FAST"};