/**
 * Used to format classes
 * @param classes classes
 * @returns formated class
 */
export function clsx(...classes: any[]): string {
  return classes.filter(Boolean).join(' ').trim();
}

export function formatQuery(url: string, query: { [key: string]: any }) {
  return `${url}?${Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join('&')}`;
}

/**
 * Used to format plain number to currency format
 * @param {string | number} price price to format
 * @returns formated price
 */
export function formatCurrency(price: string | number) {
  return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
    .format(price as number)
    .replace(/(\.|,)00$/g, '');
}
