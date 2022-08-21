import { request } from './request'

export function getTitleData() {
  return request({
    url: '/data/article',
    data: 'index=2'
  })
}