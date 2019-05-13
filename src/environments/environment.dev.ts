export const environment = {
  production: false,
  VERSION: require('../../package.json').version,
  soa: 'http://148.250.45.88:7301/store',
  sif: 'http://cerr200079:9081/sif-rest',
  scotia: 'http://148.250.45.88:3375/sif-scotia/walmart',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwOi8vd3d3LnhtbG5zLndhbG1hcnQuY29tL3dzLzIwMTcvbmV0Zm91bmRhdGlvbi9pZGVudGl0eS9jbGFpbXMvYXBwbGljYXRpb25uYW1lIjoiRWxlY3Ryb25pYyBWYWxpZGF0aW9uIG9mIEluc3RpdHV0aW9uYWwgQ2xpZW50cyBFVklDIFFBIiwiaXNzIjoiaHR0cDovL2lkZW50aXR5LnRva2VuaXNzdWVyLmNvbSIsImF1ZCI6Imh0dHA6Ly9hcHBsaWNhdGlvbi53YWxtYXJ0LmNvbSIsImV4cCI6MTUxNzQ0Njk2MSwibmJmIjoxNTE3NDQ1MTYxfQ.TvdL_ti5XG1O8Wx_KDPK3kHC03ddZNPDNByTJggTDs8',
  plm: 'http://www.plmconnection.com/plmservices/RestPharmaSearchEngine/RestPharmaSearchEngine.svc',
  map: 'AIzaSyDUftGsnucYVTUVohWe7eKZfXqY3v_N-s4',
  mapIcon : 'http://maps.google.com/mapfiles/ms/icons/',
  chat: 'http://cerr200079:3000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
