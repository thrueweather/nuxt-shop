<template>
	<div class="header" :class="scrolled && styles">
      <div class="container">
         <div class="header_wrapp">
            <div class="header_wrapp-item">
               <nuxt-link to="/"><div class="logo">La Books</div></nuxt-link>
               <div class="navigation">
                  <nav>
                      <li><nuxt-link to="/">Shop</nuxt-link></li>
                      <li><nuxt-link to="/About">About</nuxt-link></li>
                      <li><nuxt-link to="/Blog">Blog</nuxt-link></li>
                      <li><nuxt-link to="/Support">Support</nuxt-link></li>
                  </nav>
               </div>
            </div>
            <div class="mob-icon">
              <div class="header_wrapp-item" @click="openclose = !openclose" v-on:click="mobileMenu = !mobileMenu">
                <menu-icon v-if="openclose" class="custom-class mobile-icon" style="cursor: pointer;"></menu-icon>
                <x-icon v-else style="cursor: pointer;" class="custom-class"></x-icon>
              </div>
            </div>
            <Cart/>
         </div>
         <div class="header_mobile_wrapp" v-show="mobileMenu">
           <div class="header_mobile_wrapp-item">
            <nav>
              <ul>
                <li><nuxt-link to="/">Shop</nuxt-link></li>
                <li><nuxt-link to="/About">About</nuxt-link></li>
                <li><nuxt-link to="/Blog">Blog</nuxt-link></li>
                <li><nuxt-link to="/Support">Support</nuxt-link></li>
              </ul>
            </nav>
           </div>
         </div>
      </div>
    </div>
</template>

<script>
import Cart from '@/components/Cart.vue'
import { ChevronRightIcon, ShoppingCartIcon, MenuIcon, XIcon } from 'vue-feather-icons'
export default {
	components: {Cart, ChevronRightIcon, ShoppingCartIcon, MenuIcon, XIcon},
	data: () => ({
	  	mobileMenu: false,
        openclose: true,
        scrolled: false,
        styles: {
           border: 'border'
        }
	}),
	methods: {
		handleScroll() {
			this.scrolled = window.scrollY >= 1
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
	}
}
</script>