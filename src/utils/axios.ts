import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

const service = axios.create()

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config
    },
    (error: any) => {
        Promise.reject(error)
    },
)

service.interceptors.response.use(
    async (response: AxiosResponse) => {
        let errorInfo = ''
        //do something
        console.log(response)
        if (response.status === 200) {
            return response.data
        } else {
            errorInfo = '未知错误'
        }
    },
    (error: any) => {
        Promise.reject(error)
    },
)

export default service
