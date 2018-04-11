<template>
	<div class="about">
		<div class="container">
			<div class="about_wrapp">
				<div class="about_wrapp-item">
					<h3>Who are we?</h3>
					<p>{{ lorem }}</p>
				</div>
				<div class="about_wrapp-item">
					<h3>What do we do?</h3>
					<p>{{ lorem }}</p>
				</div>
			</div>
			<div class="about_wrapp">
				<div class="about_wrapp-item">
					<h3>Our mission</h3>
					<p>{{ lorem }}</p>
				</div>
				<div class="about_wrapp-item">
					<h3>Join us</h3>
					<p>{{ lorem }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'About',
		data () {
			return {
				lorem: 'Lorem ipsum dolor sit amet. Sit, amet, consectetur, adipisci velit, sed. Nemo enim ipsam voluptatem, quia. Totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et molestiae.Dolorem eum fugiat, quo minus id, quod maxime placeat. Corrupti, quos dolores eos, qui dolorem ipsum, quia dolor repellendus harum.Labore et aut rerum hic tenetur a sapiente delectus, ut aliquid. Minima veniam, quis nostrum exercitationem ullam corporis suscipit. Minima veniam, quis nostrum exercitationem ullam corporis suscipit.'
			}
		}
	}
</script>

<style lang="sass">
.about
	.about_wrapp
		display: flex
		justify-content: space-between
		align-items: center
		padding: 40px 0
		color: gray
		.about_wrapp-item
			p
				padding: 0 40px 0 0
@media only screen and (max-width: 767px)
	.about_wrapp
		flex-direction: column
@media only screen and (max-width: 480px)
	.about .about_wrapp .about_wrapp-item p
		padding: 0
</style>
