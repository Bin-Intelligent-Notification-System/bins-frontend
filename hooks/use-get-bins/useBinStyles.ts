import { Bin } from "@/components/trash-bin-list/model";
import { useMemo } from "react";

export const useBinStyles = (bin : Bin) => {
    
  const fillPercent = useMemo(() => {
    if (!bin.totalCapacity) return 0;
    const adjustedLevel =  100-Math.round((bin.currentLevel / bin.totalCapacity) * 100)
    return Math.min(
      100,
      adjustedLevel < 0? 0 : adjustedLevel
    );
  }, [bin.currentLevel, bin.totalCapacity]);

  const { barColor, statusColor, statusLabel } = useMemo(() => {
    if (fillPercent >= 100) {
      return {
        barColor: "#FF4B4B",
        statusColor: "#FF4B4B",
        statusLabel: "Full / Overflowing",
      };
    }
    if (fillPercent >= 70) {
      return {
        barColor: "#FFC857",
        statusColor: "#FFC857",
        statusLabel: "Getting Full",
      };
    }
    return {
      barColor: "#2ECC71",
      statusColor: "#2ECC71",
      statusLabel: "Normal",
    };
  }, [fillPercent]);

  const formattedLastUpdated = useMemo(() => {
    const date = new Date(bin.lastUpdated);
    if (Number.isNaN(date.getTime())) return "Unknown";

    const diffMs = Date.now() - date.getTime();
    const diffMin = Math.floor(diffMs / 1000 / 60);

    if (diffMin < 1) return "Just now";
    if (diffMin === 1) return "1 min ago";
    if (diffMin < 60) return `${diffMin} mins ago`;

    const diffHours = Math.floor(diffMin / 60);
    if (diffHours === 1) return "1 hour ago";
    if (diffHours < 24) return `${diffHours} hours ago`;

    return date.toLocaleDateString();
  }, [bin.lastUpdated]);
    
  return {fillPercent, barColor, statusColor, statusLabel, formattedLastUpdated}
}