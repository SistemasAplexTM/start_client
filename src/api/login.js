import request from '@/utils/request'

export function login (username, password, remember) {
  return request({
    url: '/auth/login',
    method: 'post',
    data: {
      email: username,
      password,
      remember_me: remember
    }
  })
}

export function register (name, username, password, password_confirmation) {
  return request({
    url: '/auth/signup',
    method: 'post',
    data: {
      name,
      email: username,
      password,
      password_confirmation
    }
  })
}

export function user () {
  return request({
    url: '/user',
    method: 'get'
  })
}

export function logout () {
  return request({
    url: 'api/auth/logout',
    method: 'get'
  })
}
