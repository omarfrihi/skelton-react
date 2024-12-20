import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";

export const useExampleApiHook = () => {
  const queryFn = () => {
    return axiosInstance.get(`example.php?s=${search}`);
  };
  return useQuery({
    queryKey: ["example"],
    queryFn,
  });
};
