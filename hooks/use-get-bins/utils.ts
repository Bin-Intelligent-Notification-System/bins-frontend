import axios from "axios";

export const fetchBins = async (url: string) => {
    const res=  await axios.get(
  `${process.env.EXPO_PUBLIC_API_BASE_URL}/api/v1/${url}`
);
return res.data;
}