/**
 * Compact Numbers
 *
 * @param {number} number
 * @param {string} locale
 * @returns {string}
 */
const compact = (number, locale = 'en') => (Intl.NumberFormat(locale, { notation: 'compact' }).format(number));

module.exports = compact;
