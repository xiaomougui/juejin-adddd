import { request } from './request'

export function getHomeData() {
    return request({
        url: '/data/home',
        data:`category=后端&tag=recommend`
    })
}


export function getData() {
    return request({
        url: '/data/home',
        data:`category=后端&tag=recommend`
    })
}


export function getHomeDataN() {
    return request({
        url: '/data/home',
        data:`category=后端&tag=newest`
    })
}

export function getHomeDataH() {
    return request({
        url: '/data/home',
        data:`category=后端&tag=hot&time=3`
    })
}


