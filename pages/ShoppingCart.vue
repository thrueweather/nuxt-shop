<template>
	<div class="shop-cart">
		<div class="container">
			<div class="shop-wrapp">
				<transition name="down">
					<div class="shop-form_discount" v-show="discountCart">
						<div class="shop-form_discount-container">
							<div class="discount-cart">
								<div style="background-color: white; padding: 10px 12px 7px 12px">
									<x-icon @click="closeDiscount" style="cursor: pointer;" class="custom-class"></x-icon>
								</div>
								<div style="margin-top: 60px;">
									<h2>ON THE FUTURE</h2>
								</div>
								<div>
									<h3 style="color: white; font-weight: 600;">Use this code to save 15%, on your order</h3>
								</div>
								<div>
									<h1 style="border: 2px dotted black; padding: 4px">27dbf957</h1>
								</div>
							</div>
						</div>
					</div>
				</transition>
				<div class="shop-form_wrapp">
					<div class="shop-form_wrapp-form">
						<div>
							<form v-on:submit.prevent name="uploadForm">
								<div class="row">
									<div><li>Recipient's phone number</li></div>
									<div><input type="text" placeholder="Number"></div>
								</div>
								<div class="row">
									<div><li>Receiver name</li></div>
									<div><input type="text" name="name"  placeholder="Name" required></div>
								</div>
								<div class="row">
									<div><li>Last name of the recipient</li></div>
									<div><input type="text" name="lastname" placeholder="Last name"></div>
								</div>
								<div class="row">
									<div><li>E-mail</li></div>
									<div><input type="email" name="email" placeholder="Email" required></div>
								</div>
								<a value="Upload"
									:disabled="!products.length"
									v-on:click="clearCount"
									@click="checkout(products)">
									<p @click="openDiscount()">The order is confirmed</p>
								</a>
								<p v-show="checkoutStatus">Checkout {{ checkoutStatus }}</p>
							</form>
						</div>
					</div>
				</div>
				<div class="shop-cart_wrapp">
					<div class="shop-cart_wrapp-item">
						<div class="shop-cart_wrapp-items"
							v-for="(product, index) in products"
							:key="index"
							:index="index"
							:product="product">
							<div>
								<h2>{{ product.title }}</h2>
								<img :src="product.img"/>
							</div>
							<div>
								{{ product.price }}$ x {{ product.quantity }}
							</div>
						</div>
						<div style="margin: 0.83em 0">Total: <span style="font-weight: 700">{{ total | currency }}</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
import { CheckCircleIcon, XCircleIcon, XIcon } from 'vue-feather-icons'
export default {
	components: {CheckCircleIcon, XCircleIcon, XIcon},
	data: () => ({
		discountCart: false
	}),
	computed: {
		...mapGetters({
			products: 'cartProducts',
			checkoutStatus: 'checkoutStatus',
			total: 'cartTotalPrice'
		})
	},
	methods: {
		checkout(products) {
			setTimeout(() => this.$store.dispatch('checkout', products), 500)
	    },
	    openDiscount() {
	    	return this.discountCart = true
	    },
	    closeDiscount() {
	    	return this.discountCart = false
	    },
	 	...mapActions([
			'increment',
			'decrement'
		]),
   		...mapMutations([
			'clearCount'
		])
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
	},
	created() {
	 window.scroll(0, 0)
	}
}
</script>

<style lang="sass">
.down-enter-active
  transition: all .5s ease
.down-leave-active
	transition: all 0.5s cubic-bezier(0.4, 0, 0, 1)
.down-enter
	transform: translateY(-10%)
	opacity: 0
.down-leave-to
	transform: translateY(-10%)
	opacity: 0
.shop-cart
	padding: 40px 0
	border-top: 1px solid #eee
	background-color: #eee
	.shop-wrapp
		display: flex
		justify-content: space-between
		width: 100%
		.shop-form_discount
			background-color: rgba(0, 0, 0, 0.1)
			position: fixed
			top: 0
			left: 0
			z-index: 100
			overflow: hidden
			margin: auto
			height: 100%
			width: 100%
			display: flex
			justify-content: center
			align-items: center
			.shop-form_discount-container
				background-color: #00fffd
				width: 60%
				margin: auto
				.discount-cart
					display: flex
					flex-direction: column
					align-items: center
					text-align: center
					justify-content: space-between
					padding: 40px 0 20px 0
		.shop-form_wrapp
			width: 70%
			.shop-form_wrapp-form
				background-color: white
				padding: 4.8%
				form
					display: flex
					flex-direction: column
					justify-content: space-between
					.row
						display: flex
						justify-content: space-between
						margin: 10px 0
						li
							list-style: none
						input
							border: 1px solid #e5e5e5
							border-radius: 5px
							padding: .8rem 1rem
							box-shadow: none
						button
							outline: none
						.todo
							ul
								li
									color: gray
					a
						border: none
						background-color: #eee
						font-weight: 700
						text-transform: uppercase
						text-align: center
						width: 95.5%
						margin: auto
						cursor: pointer
						outline: none
					p
						margin: 20px 0
		.shop-cart_wrapp
			width: 30%
			.shop-cart_wrapp-item
				display: flex
				flex-direction: column
				background-color: white
				padding: 0 10%
				margin-left: 50px
				overflow-y: auto
				.shop-cart_wrapp-items
					display: flex
					flex-direction: column
					width: 100%
					border-bottom: 1px solid #eee
					padding: 10px 0
					h2
						font-size: 17px
					.custom-class
						cursor: pointer
@media only screen and (max-width: 767px)
	.shop-cart .shop-wrapp
		flex-direction: column
		.shop-form_wrapp
			width: 100%
		.shop-cart_wrapp
			width: 100%
			padding: 20px 0 0 0
			.shop-cart_wrapp-item
				margin: 0
				text-align: center
		.shop-form_discount
			.shop-form_discount-container
				width: 90%;
@media only screen and (max-width: 480px)
	.shop-cart .shop-wrapp .shop-form_wrapp .shop-form_wrapp-form form .row
		flex-direction: column
		align-items: center
		li
			padding: 10px 0
@media only screen and (max-width: 320px)
	.shop-cart .shop-wrapp .shop-form_discount .shop-form_discount-container
		height: auto
	.shop-cart .shop-wrapp .shop-form_discount .shop-form_discount-container .discount-cart
		padding: 0
		h3 
			margin: 0
</style>
