import { request } from './request'

export function getHomeData() {
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

export function getFrontData() {
    return request({
        url: '/data/home',
        data:`category=前端`
    })
}

export function getAndroidData() {
    return request({
        url: '/data/home',
        data:`category=Android`
    })
}

export function getIOSData() {
    return request({
        url: '/data/home',
        data:`category=IOS`
    })
}

export function getAIData() {
    return request({
        url: '/data/home',
        data:`category=人工智能`
    })
}

export function getCodeData() {
    return request({
        url: '/data/home',
        data:`category=代码`
    })
}

export function getReadingData() {
    return request({
        url: '/data/home',
        data:`category=阅读`
    })
}

