import { request } from '@/util/http/request'

class UserService {
    getCartList() {
        const url = '/users/cartList';
        return request({
            url
        });
    }
}

export default new UserService() 