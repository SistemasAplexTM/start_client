import request from '@/utils/request'

export function get () {
  return request({
    url: '/routes/all',
    method: 'get'
  })
}
