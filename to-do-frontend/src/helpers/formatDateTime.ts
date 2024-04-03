import { format } from "date-fns/format";

export const formatDate = (date: number) => {
  if (!date) return;

  return format(date, "EEE, dd LLL");
};

export const formatDateWithTime = (date: number) => {
  if (!date) return "";

  return format(date, "LLL dd 'at' H:mm aaa");
};
