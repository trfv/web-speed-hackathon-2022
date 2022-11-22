import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export const toDate = (src) =>
  typeof src === "number" ? dayjs.unix(src) : dayjs(src);
