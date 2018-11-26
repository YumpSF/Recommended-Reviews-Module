import http from 'k6/http';
import { check, sleep } from 'k6';

const randName = 'Mike Dog';

export const options = {
  vus: 100,
  duration: '30s',
};

export default function() {
  var url = `http://localhost:3001/api/${randName}`;
  var payload = JSON.stringify({ name: randName });
  var params =  { headers: { "Content-Type": "application/json" } };
  http.post(url, payload, params);
  sleep(0.5);
};