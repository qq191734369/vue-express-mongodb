<template>
    <div>
        <ul>
            <li v-for="(item, index) in products" :key="index">
                {{item.productName}} {{item.productNum}}
            </li>
        </ul>
    </div>
</template>
<script>
import userService from 'service/user.service'
export default {
    data() {
        return {
            products: []
        }
    },
    created() {
        this.getCartList();
    },
    methods: {
        getCartList() {
            userService.getCartList().then(res => {
                this.products = res.result;
            })
        }
    }
}
</script>