<template>
	<footer>
		<div class="footer">
			<div class="container">
				<div class="footer_wrapp">
					<div class="footer_wrapp-item">
						<h3>Our Stores</h3>
						<div style="margin: 0 0 30px 0">
							<p>1401 South Grand Avenue</p>
							<p> Los Angeles, CA 90015</p>
							<p>(213) 748-2411</p>
						</div>
						<div>
							<p>100 Fairview Drive</p>
							<p>Franklin, VA 23851</p>
							<p>(757) 569-6100</p>
						</div>
						<div style="padding-top: 12px">
							<a href="#"><facebook-icon class="custom-class"></facebook-icon></a>
							<a href="#"><twitter-icon class="custom-class"></twitter-icon></a>
							<a href="#"><instagram-icon class="custom-class"></instagram-icon></a>
							<a href="#"><codepen-icon class="custom-class"></codepen-icon></a>
							<a href="#"><mail-icon class="custom-class"></mail-icon></a>
						</div>
					</div>
					<div class="footer_wrapp-item">
						<h3>Blog Posts</h3>
						<div style="margin: 0 0 30px 0">
							<h4 style="color: red; font-weight: 400">Duis aute irure dolor in reprehenderit.</h4>
							<h5> in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
						</div>
						<div>
							<h4>Ut enim ad minim veniam.</h4>
							<h5> in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
						</div>
						<div style="margin: 30px 0 0 0">
							<h4>officia deserunt mollit consectetur.</h4>
							<h5> in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
						</div>
					</div>
					<div class="footer_wrapp-item">
						<h3>Support</h3>
						<div style="display: flex; justify-content: space-between">
							<div>
								<nav>
									<ul>
										<li><a href="#">Terms & Conditions</a></li>
										<li><a href="#">FAQ</a></li>
										<li><a href="#">Payment</a></li>
										<li><a href="#">Refunds</a></li>
										<li><a href="#">Track Order</a></li>
										<li><a href="#">Services</a></li>
									</ul>
								</nav>
							</div>
							<div>
								<nav>
									<ul>
										<li><a href="#">Services</a></li>
										<li><a href="#">Press</a></li>
										<li><a href="#">Blog</a></li>
										<li><a href="#">About Us</a></li>
										<li><a href="#">Contact Us</a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-copyright">
			<div class="container">
				<div class="footer-copyright_wrapp">
					<div class="footer-copyright_wrapp-item">
						<h3>© 2014 labooks.com  -  All Rights Reserved  -  Find More Free Templates al 8djhywimxgt13.com</h3>
					</div>
					<div class="footer-copyright_wrapp-item">
						<img src="../assets/discover.png" alt="">
						<img src="../assets/American-Express.png" alt="">
						<img src="../assets/Mastercard.png" alt="">
						<img src="../assets/Visa.png" alt="">
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import {
	FacebookIcon,
	TwitterIcon,
	InstagramIcon,
	CodepenIcon,
	MailIcon
} from 'vue-feather-icons'
export default {
	name: 'support',
	data () {
		return {
		}
	},
	components: {
		FacebookIcon,
		TwitterIcon,
		InstagramIcon,
		CodepenIcon,
		MailIcon
	}
}
</script>

<style lang="sass">
footer
	background-color: #f6f6f6
	.footer
		padding: 20px 0
	.footer_wrapp
		display: flex
		flex-wrap: wrap
		justify-content: space-between
		flex-wrap: wrap
		.footer_wrapp-item
			width: 29%
			color: gray
			h3
				font-weight: 600
			h4
				margin: 10px 0
				font-weight: 300
			h5
				margin: 10px 0
				font-weight: 300
			p
				font-size: 14px
			a
				color: gray
				.custom-class
					padding-right: 20px
					transition: .4s
					&:hover
						color: blue
			nav
				ul
					margin: 0
					padding: 0
					li
						list-style: none
						padding: 5px 0
						a
							text-decoration: none
							font-size: 16px
	.footer-copyright
		.footer-copyright_wrapp
			border-top: 1px solid #eee
			display: flex
			justify-content: space-between
			padding: 20px 0
			.footer-copyright_wrapp-item
				color: gray
				h3
					margin: 0
					font-size: 14px
				img
					cursor: pointer
					padding: 0 10px
@media only screen and (max-width: 767px)
	footer .footer_wrapp
		flex-direction: column
		.footer_wrapp-item
			width: 100%
	footer .footer-copyright .footer-copyright_wrapp
		flex-direction: column
	footer .footer-copyright .footer-copyright_wrapp .footer-copyright_wrapp-item
		text-align: center
		padding: 5px 0
@media only screen and (max-width: 480px)
	footer .footer_wrapp
		text-align: center
</style>
