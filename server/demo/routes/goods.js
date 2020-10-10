var express = require('express');
var router = express.Router();

const Goods = require('../models/goods');
const User = require('../models/user');

router.get('/', function (req, res, next) {
    let  {
        page,
        pageSize,
        sort,
        priceFrom,
        priceTo
    } = req.query;
    page = parseInt(page || 0);
    pageSize = parseInt(pageSize || 0);
    sort = parseInt(sort);
    let  params = {};
    if (priceFrom || priceTo) {
        params = {
            salePrice: {
                $gt: priceFrom,
                $lte: priceTo
            }
        }
    }
    const  goodsModel = Goods.find(params)
            .skip((page - 1)*pageSize)
            .limit(pageSize);
    goodsModel.sort({'salePrice': sort})
    goodsModel.exec((err, doc) => {
        if (err) {
            res.json({
                status: '1',
                msg: err.message
            })
        } else  {
            res.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    data: doc
                }
            })
        }
    })
})

router.post('/addCart', function (req, res, next) {
    const userId = req.cookies.userId;
    const {
        productId,
        remove
    } = req.body
    const userModel = User.findOne({
        userId
    })
    userModel.exec((err, userDoc) => {
        if (err) {
            res.json({
                status: '1',
                msg: err.message
            })
        } else  {
            if (!userDoc) {
                res.json({
                    status: '1',
                    msg: 'User not find'
                })
                return;
            }
            Goods.findOne({ productId }, (goodErr, goodDoc) => {
                if (goodErr) {
                    res.json({
                        status: '1',
                        msg: goodErr.message
                    })
                } else {
                    if (!goodDoc) return;
                    let alreadyHas = false;
                    userDoc.cartList&&userDoc.cartList.forEach((item, index) => {
                        if (item.productId === productId) {
                            remove ? item.productNum-- : item.productNum++;
                            alreadyHas = true;

                            if (!item.productNum === 0) {
                                userDoc.cartList.splice(index, 1);
                            }
                        }
                    })
                    if (!alreadyHas) {
                        goodDoc._doc.productNum = 1;
                        goodDoc._doc.checked = 1;
                        userDoc.cartList.push(goodDoc);
                    }
                    userDoc.save((saveErr, saveDoc) => {
                        if (saveErr) {
                            res.json({
                                status: '1',
                                msg: saveErr.message
                            })
                        } else {
                            res.json({
                                status: '0',
                                msg: '',
                                result: 'done'
                            })
                        }
                    })
                }
            })
        }
    })
})

module.exports = router;
