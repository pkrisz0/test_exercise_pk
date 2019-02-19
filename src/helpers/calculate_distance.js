const office = { "lat": 47.4905949, "lng": 19.0240128 };

const rad = function(x) {
  return x * Math.PI / 180;
};

export function getDistance(coordinates) {
  let R = 6378137;
  let dLat = rad(coordinates.lat - office.lat);
  let dLong = rad(coordinates.lng - office.lng);
  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(office.lat)) * Math.cos(rad(coordinates.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return d;
}