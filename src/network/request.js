import axios from 'axios';


export function request(config) {
    const instance = axios.create({
        method: 'post',
        //data/home
        baseURL: 'http://47.92.2.163:80', //默认路径
        //baseURL:'http://47.92.2.163:80',
        timeout: 5000
    });


    // 请求拦截器
    instance.interceptors.request.use(config => {
        //拦截后需要将拦截下来的请求数据返回发送
        return config;
    }, err => {
        console.log(err);
    })

    // 响应拦截器
    instance.interceptors.response.use(res => {
        // 拦截后需要将拦截下来处理成的结果返回
        return res.data
    }, err => {
        console.log(err)
    })

    return instance(config)
}