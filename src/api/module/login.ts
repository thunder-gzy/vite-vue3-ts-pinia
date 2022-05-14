import request from '@/utils/axios'

/**
 * 登录
 *
 */

interface IResponseType<P = Record<string, never>> {
    code?: number
    status: number
    msg: string
    data: P
}

interface ILogin {
    token: string
    expires?: number
}

interface IPetId {
    id: number
}

export const loginSer = (username: string, password: string) => {
    return request<IResponseType<ILogin>>({
        url: '/api/auth/login',
        method: 'post',
        data: {
            username,
            password,
        },
    })
}

export const getPetSer = (petId: number) => {
    return request<IResponseType<IPetId>>({
        url: `http://127.0.0.1:4523/mock/914177/pet/${petId}`,
        method: 'get',
        data: {
            petId,
        },
    })
}
