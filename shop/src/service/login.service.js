import { request } from '@/util/http/request'

class LoginService {
    login(data = {
        username: '',
        password: ''
    }) {
        let url = '/login'
        return request({
            url,
            method: 'post',
            data,
            config: {
                basePath: ''
            }
        })
    }

    logout() {
        let url = '/logout'
        return request({
            url,
            method: 'post',
            config: {
                basePath: ''
            }
        })
    }
}

export default new LoginService() 