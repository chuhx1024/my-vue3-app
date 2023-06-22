import axios from 'axios'
export let baseURL = 'http://10.7.162.150:8089'
/**
 * process.env.NODE_ENV
 *    production 生产环境
 *        npm run build
 *
 *    development  开发环境
 *        npm run dev
 *
 */
// eslint-disable-next-line no-undef
switch (process.env.NODE_ENV) {
case 'production':
    baseURL = 'https://api.yuguoxy.com'
    break
case 'development':
    baseURL = 'http://10.7.162.150:8089'
    break
}
const axiosServer = axios.create({
    baseURL,
    timeout: 5000,
})
//请求拦截器
axiosServer.interceptors.request.use(
    config => {
        // console.log('请求拦截器 config ', config)
        // 设置token到authorization头部
        let token = localStorage.getItem('TOKEN')
        if (token) {
            // console.log('config.headers ',config.headers);
            config.headers['Authorization'] = token
        }
 
        return config
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)
//响应拦截器
axiosServer.interceptors.response.use(
    function (response) {
        return response.data
    },
    function (error) {
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)
export default axiosServer