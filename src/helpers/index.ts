/**
 * Takes a string representing a mass in kilograms and returns a string
 * representing that same mass in pounds, rounded to 2 decimal places.
 *
 * @param {string} mass - Mass in kilograms.
 * @returns {string} Mass in pounds, rounded to 2 decimal places.
 */

export function metricToImperialWeight(mass: string) {
  const weightInLbs = parseInt(mass) * 2.20462;
  return `${weightInLbs.toFixed(2)} lbs`;
}

/**
 * Takes a string representing a height in centimeters and returns a string
 * representing that same height in feet and inches.
 *
 * @param {string} height - Height in centimeters.
 * @returns {string} Height in feet and inches.
 */

export function metricToImperialHeight(height: string) {
  const totalInches = parseInt(height) / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return `${feet}' ${inches}"`;
}
