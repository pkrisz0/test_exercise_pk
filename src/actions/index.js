export const SEARCH_ADDRESS = 'SEARCH_ADDRESS';

export function searchAddress(query) {
  return {
    type: 'SEARCH_ADDRESS',
    query,
  };
}
