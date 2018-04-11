<template>
	<div class="blog">
		<div class="container">
			<div class="blog_wrapp">
				<div class="blog_wrapp-item">
					<img src="http://placehold.it/600/808080" alt="">
				</div>
				<div class="blog_wrapp-item">
					<p>Lorem ipsum dolor sit amet. Sit, amet, consectetur, adipisci velit. Quam nihil impedit, quo minus id quod. Laudantium, totam rem aperiam eaque. Vitae dicta sunt, explicabo perspiciatis, unde omnis dolor sit, aspernatur aut rerum. Tempore, cum soluta nobis est eligendi. Voluptate velit esse, quam nihil impedit, quo voluptas. Quo voluptas assumenda est, qui ratione voluptatem accusantium. Deleniti atque corrupti, quos dolores eos, qui. Labore et aut reiciendis voluptatibus maiores alias consequatur. Suscipit laboriosam, nisi ut aut officiis debitis aut fugit. Obcaecati cupiditate non numquam eius modi tempora. Commodi autem quibusdam et dolorum fuga omnis.</p>
				</div>
			</div>
			<div class="blog_wrapp">
				<div class="blog_wrapp-item">
					<p>Lorem ipsum dolor sit amet. Sit, amet, consectetur, adipisci velit. Quam nihil impedit, quo minus id quod. Laudantium, totam rem aperiam eaque. Vitae dicta sunt, explicabo perspiciatis, unde omnis dolor sit, aspernatur aut rerum. Tempore, cum soluta nobis est eligendi. Voluptate velit esse, quam nihil impedit, quo voluptas. Quo voluptas assumenda est, qui ratione voluptatem accusantium. Deleniti atque corrupti, quos dolores eos, qui. Labore et aut reiciendis voluptatibus maiores alias consequatur. Suscipit laboriosam, nisi ut aut officiis debitis aut fugit. Obcaecati cupiditate non numquam eius modi tempora. Commodi autem quibusdam et dolorum fuga omnis.</p>
				</div>
				<div class="blog_wrapp-item">
					<img src="http://placehold.it/600/808080" alt="">
				</div>
			</div>
			<div class="blog_wrapp">
				<div class="blog_wrapp-item">
					<img src="http://placehold.it/600/808080" alt="">
				</div>
				<div class="blog_wrapp-item">
					<p>Lorem ipsum dolor sit amet. Sit, amet, consectetur, adipisci velit. Quam nihil impedit, quo minus id quod. Laudantium, totam rem aperiam eaque. Vitae dicta sunt, explicabo perspiciatis, unde omnis dolor sit, aspernatur aut rerum. Tempore, cum soluta nobis est eligendi. Voluptate velit esse, quam nihil impedit, quo voluptas. Quo voluptas assumenda est, qui ratione voluptatem accusantium. Deleniti atque corrupti, quos dolores eos, qui. Labore et aut reiciendis voluptatibus maiores alias consequatur. Suscipit laboriosam, nisi ut aut officiis debitis aut fugit. Obcaecati cupiditate non numquam eius modi tempora. Commodi autem quibusdam et dolorum fuga omnis.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="sass">
.blog
	.blog_wrapp
		display: flex
		align-items: center
		flex-wrap: wrap
		padding: 40px 0
		.blog_wrapp-item
			width: 45%
			margin: auto
			img
				width: 100%
			p
				color: gray
				font-size: 18px
				padding: 0 10px
@media only screen and (max-width: 991px)
	.blog_wrapp
		flex-direction: column
	.blog .blog_wrapp .blog_wrapp-item
		width: 80%
		P
			padding: 0
@media only screen and (max-width: 480px)
	.blog .blog_wrapp .blog_wrapp-item
		width: 100%
</style>
