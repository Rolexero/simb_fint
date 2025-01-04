import axiosInstance from "./axios";

export const fetchUsersInfo = async () => {
  const { data } = await axiosInstance.get(`/users`);
  return data;
};

export const fetchTransactionsInfo = async () => {
  const { data } = await axiosInstance.get(`/transactions`);
  return data;
};
