<template>
    <div>
        <ul>
            <li v-for="good in goods" :key="good.productId" @click="addToCart(good)">
                <span>{{good.productName}}</span>
                <a href="javascript:void(0);">加入购物车</a>
            </li>
        </ul>

        <div class="cart-icon" @click="gotoCartList">
            购物车数量：{{cart.length}}
        </div>
        <Toast :show="false">惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了惊了</Toast>
    </div>
</template>

<script>
import goodlistService from 'service/goodList.service'
import userService from 'service/user.service'
import Toast from 'components/Toast'
/** remove **/
console.log('need remove')
/** removeend **/
export default {
    components: {
        Toast
    },
    data: () => {
        return {
            page: 1,
            pageSize: 10,
            goods: [],
            cart: []
        }
    },
    created() {
        goodlistService.listGoods({
            page: this.page,
            pageSize: this.pageSize
        }).then(data => {
            this.goods = data.result.data
        });
        this.getCartList();
        window.addEventListener('scroll', () => {
            console.log('scroll')
        })
    },
    methods: {
        addToCart(product) {
            const {
                productId
            } = product
            goodlistService.addCart(productId).then(res => {
                console.log(res)
            })
        },
        getCartList() {
            userService.getCartList().then(res => {
                this.cart = res.result
            })
        },
        gotoCartList() {
            this.$router.push({name: 'cartList'})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>