import axios from 'axios'
import store from '@/store'

//创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000 //请求超时时间
})

//request拦截器
service.interceptors.request.use(config =>{
  if(store.getters.token) {
    config.headers['X-Token'] = getToken(); //让每个请求携带token--['X-Token']为自定义key 根据实际情况自行更改
  }
  return config;
}, error => {
  console.log(error);
  Promise.reject(error);
})

//response拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error) 
  }


)