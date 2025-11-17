import { useGetBins } from "@/hooks/use-get-bins/use-get-bins";
import { ActivityIndicator, View } from "react-native";
import { ERROR_MESSAGE_GENERIC } from "../error-banner/constants";
import { ErrorBanner } from "../error-banner/error-banner";
import { BinCard } from "./bin";
import { Bin } from "./model";

export const BinList = () => {
  const { data, isLoading, isError } = useGetBins();
  if (isLoading) return <ActivityIndicator />;
  if (isError) return <ErrorBanner message={ERROR_MESSAGE_GENERIC} />;
  return (
    <View>
      {data?.map((bin: Bin) => (
        <BinCard key={bin.uuid} bin={bin} />
      ))}
    </View>
  );
};
