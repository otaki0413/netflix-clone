import fetcher from "@/lib/fetcher";
import useSWR from "swr";

// 現在のログインユーザーを取得する用のカスタムフック
const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
