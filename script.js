import http from 'k6/http';
import { check, sleep } from 'k6';

const randomInt = max => Math.floor(Math.random() * max);

const randId = [8800000, 8700005, 8900000, 9100000, 8805000, 8700000];

export const options = {
  stages: [
    { duration: '30s', target: 1000 },
    { duration: '1m30s', target: 500 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  const res = http.get(`http://localhost:3001/api/${randId[randomInt(randId.length)]}`);
  check(res, {
    'status was 200': r => r.status === 200,
    'transaction time OK': r => r.timings.duration < 200,
  });
  sleep(1);
}
