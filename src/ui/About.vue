<template>
	<div class="about">
		<div class="container">
			<div class="about__wrapper">
				<div class="about__text">
					<h3 class="about__title">Качество, проверенное временем</h3>
					<p class="about__description">
						Компания &laquo;Империя Кровли&raquo; предоставляет комплекс услуг по&nbsp;кровельным работам
						любой
						сложности. Специализируемся на&nbsp;монтаже фальцевой кровли и&nbsp;натуральной черепицы.
						Компания
						&laquo;Империя Кровли&raquo; работает на&nbsp;рынке строительства и&nbsp;реконструкции кровли
						более
						12&nbsp;лет.
						За&nbsp;это время нами реализовано более 100 проектов в&nbsp;Челябинске и&nbsp;Челябинской
						области,а
						также в&nbsp;Екатеринбурге и&nbsp;Свердловской области.
					</p>
					<h3 class="about__title">Работая с нами, вы получаете:</h3>
					<ul class="about__list">
						<li class="about__item">
							<span>Строительство крыши любой сложности</span>
						</li>
						<li class="about__item">
							<span>Профессиональный монтаж кровли всех видов</span>
						</li>
						<li class="about__item">
							<span>Использование профессионального оборудования и современных технологий</span>
						</li>
						<li class="about__item">
							<span>Изготовление всех изделий непосредственно на&nbsp;объекте (прокат фальцевых панелей, изготовление доборных элементов и&nbsp;сайдинга)</span>
						</li>
						<li class="about__item">
							<span>Накопленный опыт и постоянное обучение</span>
						</li>
						<li class="about__item">
							<span>Полный комплекс услуг: замер, проектирование, подбор и&nbsp;поставка строительных материалов, монтаж, обслуживание</span>
						</li>
					</ul>
				</div>
				<div class="about__images">
					<img class="about__img" src="../assets/images/photo-about.jpg" alt="Photo"/>
					<img src="../assets/images/certificate.jpg" alt="Photo: Certificate photo"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "About",
}
</script>

<style lang="scss">
.about {
	&__wrapper {
		display: flex;
		padding: 160px 0 60px 0;
	}

	&__text {
		margin-right: 70px;
		max-width: 42%;
		font-family: $font-family-clear-sans-regular;
	}

	&__title {
		margin: 0;
		font-family: $font-family-ptsans-narrow-bold;
		font-size: 29px;
		letter-spacing: 0.5px;
	}

	&__description {
		margin: 10px 0 50px 0;
		font-size: 18px;
	}

	&__list {
		margin-top: 10px;
		font-size: 18px;
	}

	&__item {
		margin-bottom: 20px;
		margin-left: -1em;
		line-height: 1.22;
	}

	&__img {
		margin-bottom: 20px;
	}
}
</style>
