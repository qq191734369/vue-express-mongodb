import { request } from '@/util/http/request'

class GoodListService {
    listGoods(params = {}) {
        const url = '/goods'
        return request({
            url,
            params
        })
    }

    addCart(productId) {
        const url = '/goods/addCart'
        return request({
            method: 'post',
            url,
            data: {
                productId
            }
        })
    }
}

export default new GoodListService() 