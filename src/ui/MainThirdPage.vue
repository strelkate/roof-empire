<template>
	<div class="third-page">
		<div class="container__2">
			<div class="third-page__title">С чего начать?</div>
			<div class="third-page__content">
				<div class="third-page__item">
					<img class="third-page__image" src="../assets/icons/ic_house_1.png" alt="Photo: photo house"/>
					<div class="third-page__text">Мы предлагаем широкий спектр услуг.<br/>Найдите то, что вам нужно.
					</div>
					<button
						class="third-page__button"
						@click="routerPush({name: 'services'})"
					>
						Посмотреть список услуг
					</button>
				</div>
				<div class="third-page__item">
					<img class="third-page__image" src="../assets/icons/ic_house_2.png" alt="Photo: photo house"/>
					<div class="third-page__text">Есть вопросы? Хотите сделать заказ?<br/>Давайте пообщаемся.</div>
					<button
						class="third-page__button"
						@click="routerPush({name: 'contacts'})"
					>
						Связаться с нами
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapActions} from "vuex";

export default {
	name: "MainThirdPage",
	methods: {
		...mapActions(['routerPush']),
	},
}
</script>

<style lang="scss">
.third-page {
	padding: 60px 0;
	background: $color-main-dark url("../assets/images/background_main_tree.png") no-repeat bottom;
	-moz-background-size: 100%;
	-webkit-background-size: 100%;
	-o-background-size: 100%;
	background-size: 100%;

	&__title {
		margin-bottom: 40px;
		text-align: center;
		font-family: $font-family-ptsans-narrow-bold;
		font-size: 50px;
		font-weight: 700;
		color: $color-main-light;
		letter-spacing: 0.5px;
	}

	&__content {
		display: flex;
		align-items: start;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	&__item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		background-color: $color-main-light;
		padding: 34px;
		max-width: 400px;
		height: 400px;
	}

	&__image {
		max-width: 200px;
		height: 120px;
	}

	&__text {
		text-align: center;
		font-family: $font-family-roboto-regular;
		margin: 20px 0;
	}

	&__button {
		border: 2px solid $color-main-light;
		border-radius: 10px;
		background-color: $color-main-dark;
		font-family: $font-family-ptsans-narrow-bold;
		font-size: 22px;
		letter-spacing: 0.5px;
		color: $color-main-light;
		text-transform: uppercase;
		padding: 20px 30px;
		cursor: pointer;
		&:hover {
			color: $color-main-dark;
			background-color: $color-main-light;
			border: 2px solid $color-main-dark;
		}
	}
}
</style>
