export function formatNumber(num) {
  if (num === null || num === undefined) {
    return 'unknown';
  }

  return num.toLocaleString();
}