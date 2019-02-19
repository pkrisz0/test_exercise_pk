export const SEARCH_ADDRESS = 'SEARCH_ADDRESS';
export const CLEAR_ADDRESS = 'CLEAR_ADDRESS';

export function searchAddress(query) {
  return {
    type: 'SEARCH_ADDRESS',
    query,
  };
}

export function clearAddress() {
  return {
    type: 'CLEAR_ADDRESS',
  };
}