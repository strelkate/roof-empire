<template>
	<div class="second-page">
		<div class="container__2">
			<h3 class="second-page__title">Почему стоит обратиться к нам?</h3>
			<div class="second-page__content">
				<div class="second-page__feature feature">
					<img class="feature__image" src="../assets/images/features/1.jpg"/>
					<div class="feature__title">Любые виды покрытий</div>
					<p class="feature__text">
						Профессиональный монтаж кровли всех видов. <b>Специализируемся на&nbsp;монтаже фальцевой
						кровли</b>, а&nbsp;также металлочерепицы, натуральной черепицы и&nbsp;медной кровли.
					</p>
					<div class="feature__link" @click="routerPush({name: 'portfolio'})"><u>Примеры проектов</u></div>
				</div>
				<div class="second-page__feature feature">
					<img class="feature__image" src="../assets/images/features/2.jpg"/>
					<div class="feature__title">Индивидуальный подход</div>
					<p class="feature__text">
						Осуществляем индивидуальный подход к&nbsp;каждому проекту и&nbsp;пожеланию клиента. Такая крыша
						будет только у&nbsp;Вас!
					</p>
				</div>
				<div class="second-page__feature feature">
					<img class="feature__image" src="../assets/images/features/3.jpg"/>
					<div class="feature__title">Современное оборудование и технологии</div>
					<p class="feature__text">
						В&nbsp;работе используем самое современное оборудование. Имеем большой опыт работы с&nbsp;любым
						инструментом и&nbsp;материалами.
					</p>
					<div class="feature__link" @click="routerPush({name: 'about'})"><u>Как мы работаем</u></div>
				</div>
				<div class="second-page__feature feature">
					<img class="feature__image" src="../assets/images/features/4.jpg"/>
					<div class="feature__title">Гарантия и сервис на 2 года</div>
					<p class="feature__text">
						Мы&nbsp;работаем строго по&nbsp;договору и&nbsp;даем гарантию на&nbsp;все виды работ 2 года.
					</p>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import {mapActions} from "vuex";

export default {
	name: "MainSecondPage",
	methods: {
		...mapActions(['routerPush']),
	},
}
</script>

<style lang="scss">
.second-page {
	&__title {
		margin: 60px 0 40px 0;
		font-family: $font-family-ptsans-narrow-bold;
		font-size: 50px;
		font-weight: 700;
		text-align: center;
	}

	&__content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
}

.feature {
	max-width: 400px;
	width: 100%;
	margin-bottom: 40px;

	&__image {
		width: 100%;
		height: 220px;
	}

	&__title {
		margin-top: 10px;
		font-family: $font-family-ptsans-narrow-bold;
		font-weight: 700;
		font-size: 29px;
		line-height: 33px;
		letter-spacing: 0.5px;
	}

	&__text {
		margin: 10px 0;
		font-size: 17px;
		font-family: $font-family-roboto-regular;
	}

	&__link {
		font-family: $font-family-roboto-regular;
		color: $color-main-dark;
		cursor: pointer;

		&:hover {
			color: $color-text;
		}
	}
}
</style>
