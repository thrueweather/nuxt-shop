<template>
	<div class="header_wrapp-item">
		<div class="cart" @click="ModalCart = true">
			<div class="cart_icon" style="cursor: pointer;">
				<shopping-cart-icon class="custom-class"></shopping-cart-icon>
				{{ total | currency }}
				<div
					style="position: absolute; top: -18%; right: 0; background-color: red; border-radius: 50%; padding: 4px 8px; font-size: 10px; color: white;">
					{{ count }}
				</div>
			</div>
		</div>
		<transition name="animaterouter">
			<div class="modal-cart" v-show="ModalCart">
				<div class="modal-cart-container">
					<div class="modal-cart-container-item">
						<div class="title">
							<div><h2>Your Cart</h2></div>
							<div><p v-show="!products.length"><i>Please add some products to cart.</i></p></div>
							<div style="height: 50px; width: 50px">
								<span @click="ModalCart = false"><x-icon class="custom-class"></x-icon></span>
							</div>
						</div>
						<div class="cart_wrapp-item"
							v-for="(product, index) in products"
							:index="index"
							:key="product.id"
							:item="product"
							:product="product">
							<div>
								<h3>{{ product.title }}
								</h3>
								<img :src="`/${product.img}`"/>
							</div>
							<div>
								{{ product.price }} x {{ product.quantity }}
							</div>
						</div>
						<nuxt-link to="/ShoppingCart">
							<p><button @click="ModalCart = false">Checkout</button></p>
						</nuxt-link>
						<h3>Total: {{ total | currency }}$</h3>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
import { ShoppingCartIcon, XIcon } from 'vue-feather-icons'
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
import shop from '../api/shop.js'
	export default {
		data: () => ({
			ModalCart: false
		}),
		components: {
			ShoppingCartIcon,
			XIcon
		},
		computed: {
			...mapState([
				'count'
			]),
			...mapGetters({
		      products: 'cartProducts',
		      checkoutStatus: 'checkoutStatus',
		      total: 'cartTotalPrice'
		    })
		},
		filters: {
			currency: function(value, currency, decimals) {
			  const digitsRE = /(\d{3})(?=\d)/g
				value = parseFloat(value)
			  if (!isFinite(value) || (!value && value !== 0)) return ''
			  currency = currency != null ? currency : '$'
			  decimals = decimals != null ? decimals : 2
			  var stringified = Math.abs(value).toFixed(decimals)
			  var _int = decimals
			    ? stringified.slice(0, -1 - decimals)
			    : stringified
			  var i = _int.length % 3
			  var head = i > 0
			    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
			    : ''
			  var _float = decimals
			    ? stringified.slice(-1 - decimals)
			    : ''
			  var sign = value < 0 ? '-' : ''
			  return sign + currency + head +
			    _int.slice(i).replace(digitsRE, '$1,') +
			    _float
			}
		}
	}
</script>

<style lang="sass">
.animaterouter-enter-active, .animaterouter-leave-active
  transition: opacity .5s
.animaterouter-enter, .animaterouter-leave-to
  opacity: 0
.header
	.header_wrapp
		.header_wrapp-item
			.cart
				color: #eee
				.cart_icon
					border: 2px solid #eee
					border-radius: 20px
					padding: 8px 10px
					position: relative
			.modal-cart
				background: rgba(0, 0, 0, 0.5)
				position: fixed
			    top: 0
			    left: 0
		    	overflow: hidden
				margin: auto
				width: 100%
				display: flex
				justify-content: center
				align-items: center
				.modal-cart-container
					background-color: white
					width: 80%
					max-height: 90%
					overflow-y: scroll
					padding: 20px
					.title
						border-bottom: 1px solid #e5e5e5
						display: flex
						flex-direction: row
						justify-content: space-between
						padding: 10px 0
						span
							cursor: pointer
					.cart_wrapp-item
						display: flex
						flex-direction: row
						justify-content: space-between
						align-items: center
						border-bottom: 1px solid #e5e5e5
						padding: 10px 0
					button
						text-tranform: uppercase
						font-size: 18px
						color: #65889b
						background-color: #eee
						margin: 15px 0 0 0
						padding: 8px 20px
						color: black
						border: none
						outline: none
						cursor: pointer
</style>
