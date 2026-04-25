import { format } from "date-fns";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export function formatDateWithOrdinal(date: Date | string | number) {
  // 确保参数是Date对象
  const dateObj = date instanceof Date ? date : new Date(date);

  // 验证日期是否有效
  if (isNaN(dateObj.getTime())) {
    throw new Error("Invalid date provided to customDateFormat");
  }

  const month = format(dateObj, "MMM");
  const day = dateObj.getDate();
  const year = format(dateObj, "yyyy");

  // 处理序数后缀
  let suffix = "th";
  if (day % 10 === 1 && day !== 11) suffix = "st";
  else if (day % 10 === 2 && day !== 12) suffix = "nd";
  else if (day % 10 === 3 && day !== 13) suffix = "rd";

  return `${month}. ${day}${suffix}, ${year}`;
}