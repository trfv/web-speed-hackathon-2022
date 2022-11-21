import { toDate } from "../../../utils/dateutils";

export const newDate = () => toDate(new Date());

/**
 * @param {string} dateLeft
 * @param {string} dateRight
 * @returns {boolean}
 */
export const isSameDay = (dateLeft, dateRight) => {
  return toDate(dateLeft).isSame(toDate(dateRight), "day");
};

/**
 * @param {string} dateLeft
 * @param {string} dateRight
 * @returns {boolean}
 */
export const isBefore = (dateLeft, dateRight) => {
  return toDate(dateLeft).isBefore(toDate(dateRight));
};

/**
 * @param {string} dateLeft
 * @param {string} dateRight
 * @returns {boolean}
 */
 export const isAfter = (dateLeft, dateRight) => {
  return toDate(dateLeft).isAfter(toDate(dateRight));
};

/**
 *
 * @param {string} ts
 * @returns {string}
 */
export const formatTime = (ts) => {
  return toDate(ts).format("H:mm");
};

/**
 * @param {string} closeAt
 * @param {number | Date} now
 * @returns {string}
 */
export const formatCloseAt = (closeAt, now = new Date()) => {
  if (toDate(closeAt).isBefore(now)) {
    return "投票締切";
  }

  if (toDate(closeAt).isAfter(toDate(now).add(2, "hours"))) {
    return "投票受付中";
  }

  return `締切${toDate(closeAt).diff(now, "minutes")}分前`;
};
