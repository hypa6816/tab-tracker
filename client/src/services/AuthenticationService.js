import Api from '@/services/Api'

export default {
  /*
  register method which will post whatever object passed into it
  */
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
