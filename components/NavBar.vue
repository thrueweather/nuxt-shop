<template>
	<div class="navbar">
		<div class="top-nav" v-show="navView">
			<div class="container">
				<div class="top-nav_wrapp"> 
					<div class="top-nav_wrapp-items"><h3>English  <arrow-right-icon class="custom-class" style="height: 18px;width: 20px"></arrow-right-icon></h3></div>
					<div class="top-nav_wrapp-items"><h3>Find a Store - My Account</h3></div>
				</div>
			</div>
		</div>
		<div class="top-nav-click" style="text-align: center" @click="navView = !navView">
			<div class="container">
				<more-horizontal-icon class="custom-class" style="height: 20px; cursor: pointer;"></more-horizontal-icon>
			</div>
		</div>
	</div>
</template>

<script>
import { MoreHorizontalIcon, ArrowRightIcon } from 'vue-feather-icons'
	export default {
	data() {
		return {
			msg: 'Hello World! It`s my first learns',
			navView: false
		}
	},
	components: {
	    MoreHorizontalIcon,
	    ArrowRightIcon 
	  }
}
</script>

<style lang="sass">
.top-nav 
	background-color: #f7f7f7
	z-index: 15
	color: gray
	.top-nav_wrapp
		display: flex
		flex-direction: row
		justify-content: space-between
		align-items: center
		padding: 10px 0
		.top-nav_wrapp-items
			h3
				margin: 0
				font-weight: 300
				font-size: 18px
.top-nav-click
	background-color: #f7f7f7


@media only screen and (max-width : 1199px) 
	.top-nav .top-nav_wrapp 
		flex-direction: column
		.top-nav_wrapp-items
			padding: 5px 0

@media only screen and (max-width : 991px) {}



@media only screen and (max-width : 767px) {}
	


@media only screen and (max-width : 480px) {}
	
</style>