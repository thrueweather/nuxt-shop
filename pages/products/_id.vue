<template>
	<div class="item" >
		<div class="container">
			<div class="item-wrapp" v-if="product">
				<div class="item-wrapp-img">
					<div>
						<h3>{{ product.title }}</h3>
						<img :src="`/${product.img}`"/>
					</div>
				</div>
				<div class="item-wrapp-items">
					<h3>{{ product.body }}</h3>
					<h1>{{ product.price }}$</h1>
					<button
						:disabled="!product.inventory"
						v-on:click="increment"
						@click="addProductToCart(product)">
						Add to cart
					</button>
					<nuxt-link to="/">
						<button>Back to shop</button>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
	computed: {
		...mapGetters({
			products: 'allProducts',
		})
	},
	methods: {
		...mapActions([
			'addProductToCart',
			'increment'
		])
	},
	created() {
		window.scroll(0, 0)
		this.$store.dispatch('getAllProducts')
		let id = this.$route.params.id
		this.product = this.products[id]
	}
}
</script>

<style lang="sass">
.item
	border: 1px solid #eee
	padding: 40px 0
	.item-wrapp
		display: flex
		img
			width: 120px
			height: 183px
		.item-wrapp-img
			display: flex
			flex-direction: row
			align-items: center
			justify-content: space-between
			padding-right: 30px
			width: 50%
		.item-wrapp-items
			padding-left: 30px
			width: 50%
			h3
				color: gray
			button
				text-tranform: uppercase
				font-size: 18px
				color: #65889b
				background-color: #eee
				margin: 15px 0 0 0
				padding: 8px 25px
				color: black
				border: none
				outline: none
				cursor: pointer
@media only screen and (max-width: 991px)
	.item .item_wrapp .item_wrapp-items h3
		font-size: 16px
@media only screen and (max-width: 767px)
	.item .item-wrapp
		flex-direction: column
		align-items: center
		.item-wrapp-img
			width: 100%
			padding: 0
		.item-wrapp-items
			width: 100%
			padding: 0
</style>
