import Vue from 'vue'
import Vuex from 'vuex'
import shop from '../api/shop.js'

Vue.use(Vuex)

const createStore = () => new Vuex.Store({
	state: {
		all: [],
		added: [],
		count: 0,
  		checkoutStatus: null
	},
	getters: {
		allProducts: state => state.all,

		checkoutStatus: state => state.checkoutStatus,

		cartProducts: (state, getters, rootState) => {
			return state.added.map(({ id, quantity }) => {
			  const product = rootState.all.find(product => product.id === id)
			  return {
			    img: product.img,
			    title: product.title,
			    price: product.price,
			    body: product.body,
			    quantity
			  }
			})
		},

		cartTotalPrice: (state, getters) => {
			return getters.cartProducts.reduce((total, product) => {
			  return total + product.price * product.quantity
			}, 0)
		}
	},
	actions: {
		increment: ({ commit }) => commit('increment'),

    	decrement: ({ commit }) => commit('decrement'),

		getAllProducts ({ commit }) {
			shop.getProducts(products => {
				commit('setProducts', products)
			})
		},

		checkout ({ commit, state }, products) {
	    	const savedCartItems = [...state.added]
		    commit('setCheckoutStatus', null)
		    // empty cart
		    commit('setCartItems', { items: [] })
		    shop.buyProducts(
		      products,
		      () => commit('setCheckoutStatus', 'successful'),
		      () => {
		        commit('setCheckoutStatus', 'failed'),
		        // rollback to the cart saved before sending the request
		        commit('setCartItems', { items: savedCartItems })
		      }
		    )   
	  	},

		addProductToCart ({ state, commit }, product) {
			commit('setCheckoutStatus', null)
			if (product.inventory > 0) {
			  const cartItem = state.added.find(item => item.id === product.id)
			  if (!cartItem) {
			    commit('pushProductToCart', { id: product.id })
			  }
			  else {
			    commit('incrementItemQuantity', cartItem)
			  }
			  // remove 1 item from stock
			  commit('decrementProductInventory', { id: product.id })
			}
		}

	},
	mutations: {
		increment: state => state.count++,

    	decrement: state => state.count--,

    	clearCount: function(state)  {
    		setTimeout(() => { state.count = 0 }, 500)
    	},

		setProducts(state, products) { 
			state.all = products
		},
			
		decrementProductInventory (state, { id }) {
			const product = state.all.find(product => product.id === id)
			product.inventory--
		},

		pushProductToCart (state, { id }) {
			state.added.push({
			  id,
			  quantity: 1
			})
		},

		incrementItemQuantity (state, { id }) {
			const cartItem = state.added.find(item => item.id === id)
			cartItem.quantity++
		},

		setCartItems (state, { items }) {
			state.added = items
		},

		setCheckoutStatus (state, status) {
			state.checkoutStatus = status
		}
	}
})

export default createStore