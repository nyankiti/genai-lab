import { format, toZonedTime } from 'date-fns-tz';

/**
 * @param date - The date object to be converted to a string
 * @returns {string} - The date in YYYY-MM-DD format
 * @description - This function converts a date object to a string in the format YYYY-MM-DD.
 */
export const getDateString = (date: Date): string => {
  const timeZone = 'Asia/Tokyo';
  const zonedDate = toZonedTime(date, timeZone);
  return format(zonedDate, 'yyyy-MM-dd', { timeZone });
};

/**
 * @param n - The number of days to subtract from the current date
 * @description - This function returns a date object that is n days in the past from the current date,
 *               ensuring it is in the Asia/Tokyo time zone.
 * @returns {Date} - A date object representing the date n days in the past (Tokyo)
 */
export const getPastDate = (n: number): Date => {
  const timeZone = 'Asia/Tokyo';
  const now = new Date();
  const zonedDate = toZonedTime(now, timeZone);
  zonedDate.setDate(zonedDate.getDate() - n);
  return zonedDate;
};
