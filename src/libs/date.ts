/**
 * @returns {string} - The current date in YYYY-MM-DD format
 * @description - This function returns the current date as a string in the format YYYY-MM-DD.
 */
export const todaysDateString = (): string => new Date().toISOString().split('T')[0];
