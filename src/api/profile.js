import request from '@/utils/request'

export function update (data) {
  return request({
    url: '/profile/update',
    method: 'post',
    data
  })
}
