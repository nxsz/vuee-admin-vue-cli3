import request from '../utils/request';

export default function login(params) {
  return request({
    url: 'gauge2/sys/login',
    method: 'post',
    params,
  });
}
