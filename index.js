/**
 * Compact Numbers
 *
 * @param {number} number
 * @param {string} locale
 * @returns {string}
 */
export const compact = (number, locale = 'en') => (Intl.NumberFormat(locale, { notation: 'compact' }).format(number));
