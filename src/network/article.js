import { request } from './request'

export function getTiltleData() {
  return request({
    url: '/data/article',
    data:`index=10`
  })
}