<template>
  <div class="products">
		<div class="bilboards">
			<div class="container">
				<div class="bilboars_wrapp">
					<div class="bilboars_wrapp-item">
						<h3>NEW SEASON ARRIVALS.</h3>
						<p>CHECK OUT ALL THE NEW BOOKS</p>
						<button>Shop Now</button>
					</div>
				</div>
			</div>
		</div>
		<div class="products">
			<div class="container">
				<div class="products_title">
			        <h3>latest products</h3>
			    </div>
			    <div class="products_wrapp">
					<div class="products_wrapp-item"
						v-for="(product, index) in products"
						:index="index"
						:key="product.id"
						:item="product"
						:product="product">
						<p>{{ product.title }}</p>	<br>
						<nuxt-link :to="`/products/${product.id}`">
							<img :src="product.img"/>
						</nuxt-link>
						<h4>${{ product.price }}</h4>
						<button
							:disabled="!product.inventory"
							v-on:click="increment"
							@click="addProductToCart(product)"
              style="border-radius: 20px">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import shop from '../api/shop.js'
export default {
	props: ["product"],
	data: () => ({

	}),
	computed: {
	 	...mapGetters({
			products: 'allProducts'
		})
	},
	methods: {
		...mapActions([
	 		'addProductToCart',
	 		'increment'
	 	])
	},
	created() {
		this.$store.dispatch('getAllProducts')
	}
}
</script>

<style lang="sass">
.products
	.bilboards
  background-color: #00fffd
		.bilboars_wrapp
			padding: 140px 0
			.bilboars_wrapp-item
				h3
					color: white
					font-size: 40px
					font-weight: black
					margin: 0
				p
					color: #ffffff
					font-size: 22px
					font-weight: light
					margin: 0
				button
					text-tranform: uppercase
					font-size: 18px
					color: gray
					background-color: white
					margin: 15px 0 0 0
					padding: 8px 25px
					border: none
					outline: none
					cursor: pointer
	.products
	  padding: 40px 0
	  .products_title
	    text-align: center
	    padding: 0 0 20px 0
	    h3
	      color: gray
	      text-transform: uppercase
	      font-size: 20px
	      font-weight: 400
	      margin: 0
	  .products_wrapp
	    display: flex
	    flex-direction: row
	    justify-content: space-between
	    flex-wrap: wrap
	    align-items: center
	    .products_wrapp-item
	      border: 1px solid #eee
	      border-radius: 6px
	      text-align: center
	      width: 30.7%
	      margin: 1% 1%
	      padding: 15px 0
	      a
	      	outline: none
	      h3
	        text-transform: uppercase
	        font-size: 16px
	        font-weight: 400
	        color: gray
	      p
	        margin: 0
	        color: black
	        font-weight: 400
	      button
	      	border: none
	      	background-color: #eee
	      	padding: 12px 25px
	      	margin: 10px 0
	      	cursor: pointer
	      	transition: .3s
	      	&:hover
        		background-color: #00fffd
@media only screen and (max-width: 991px)
	.products_wrapp
		margin: 2%
		padding: 20px 0
	.products .products .products_wrapp .products_wrapp-item
		width: 47.7%
@media only screen and (max-width: 767px)
	.products .products .products_wrapp
		flex-direction: column
	.products .products .products_wrapp .products_wrapp-item
	    width: 100%

@media only screen and (max-width: 480px)
	.products .products .products_wrapp
			flex-direction: column
			.products_wrapp-item
	    		width: 90%
</style>
