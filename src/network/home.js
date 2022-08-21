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

export function getFrontData() {
    return request({
        url: '/data/home',
        data:`category=前端&tag=recommend`
    })
}

export function getBackData() {
    return request({
        url: '/data/home',
        data:`category=后端&tag=recommend`
    })
}

export function getAndroidData() {
    return request({
        url: '/data/home',
        data:`category=Android&tag=recommend`
    })
}

export function getIOSData() {
    return request({
        url: '/data/home',
        data:`category=IOS&tag=recommend`
    })
}

export function getAIData() {
    return request({
        url: '/data/home',
        data:`category=人工智能&tag=recommend`
    })
}

export function getCodeData() {
    return request({
        url: '/data/home',
        data:`category=代码&tag=recommend`
    })
}

export function getReadingData() {
    return request({
        url: '/data/home',
        data:`category=阅读&tag=recommend`
    })
}


