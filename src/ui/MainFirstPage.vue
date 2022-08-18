<template>
	<div class="first-page">
		<div class="first-page__content">
			<div class="first-page__title">Кровельные работы любой сложности<br/>в Челябинске и Челябинской области
			</div>
			<div class="first-page__subtitle">Реализовали более 100 успешных проектов за 12 лет</div>
		</div>
		<img class="first-page__image" src="../assets/images/main_house.png" alt="Photo: main photo house"/>
	</div>
</template>

<script>
export default {
	name: "MainFirstPage"
}
</script>

<style lang="scss">
.first-page {
	background: $color-main-light url("../assets/images/background_main.png") no-repeat bottom;
	-moz-background-size: 100%;
	-webkit-background-size: 100%;
	-o-background-size: 100%;
	background-size: 100%;

	&__content {
		width: 100%;
		text-align: center;
		padding-top: 160px;
	}

	&__image {
		width: 100%;
	}

	&__title {
		margin: 0;
		font-family: $font-family-ptsans-narrow-bold;
		font-size: 60px;
		font-weight: 700;
		line-height: 1.2;
		letter-spacing: 1.2px;
	}

	&__subtitle {
		margin-top: 30px;
		margin-bottom: 70px;
		font-family: $font-family-roboto-regular;
		font-size: 28px;
	}
}
</style>
