import { request } from './request'

export function getHomeData() {
    return request({
        url: '/data/home'
    })
}

