import { request } from './request'

export function getHomeData() {
    return request({
        url: '/data/home',
        data:`category=前端`
    })
}


