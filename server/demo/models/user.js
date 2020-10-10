const  mongoose = require('mongoose')

const  userSchema = new mongoose.Schema({
    'userId': String,
    'userName': String,
    'userPwd': String,
    'orderList': Array,
    'cartList': [
        {
            'productId': String,
            'productName': String,
            'salePrice': String,
            'productImg': String,
            'checked': String,
            'productNum': Number
        }
    ],
    'addressList': Array
})

module.exports = mongoose.model('User', userSchema)