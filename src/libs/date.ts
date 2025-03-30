/**
 * @param date - The date object to be converted to a string
 * @returns {string} - The date in YYYY-MM-DD format
 * @description - This function converts a date object to a string in the format YYYY-MM-DD.
 */
export const getDateString = (date: Date): string => date.toISOString().split('T')[0];

/**
 *
 * @param n - The number of days to subtract from the current date
 * @description - This function returns a date object that is n days in the past from the current date.
 * @returns  {Date} - A date object representing the date n days in the past
 */
export const getPastDate = (n: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() - n);
  return date;
};
