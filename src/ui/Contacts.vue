<template>
	<div class="contacts">
		<div class="container__2">
			<div class="contacts__description">
				Вы&nbsp;хотите сделать заказ? Нужно посчитать<br/>стоимость проекта? Есть вопросы по&nbsp;услугам?<br/>Обратитесь
				к&nbsp;нашему директору или заместителю директора&quot;<br/>по&nbsp;любым вопросам.
			</div>
			<div class="contacts__cards">
				<div class="contacts__card">
					<img class="contacts__avatar" alt="Img: avatar" src="../assets/icons/ic_director.png"/>
					<div class="contacts__text">
						<span class="contacts__name">Руськин Денис Владимирович</span>
						<span>Директор</span>
						<a href="tel:89823194892" class="contacts__phone">8-982-319-48-92</a>
						<a href="mailto:den.ruskin@roof-empire.ru" class="contacts__email">den.ruskin@roof-empire.ru</a>
					</div>

				</div>
				<div class="contacts__card">
					<img class="contacts__avatar" alt="Img: avatar" src="../assets/icons/ic_brigadier.png"/>
					<div class="contacts__text">
						<span class="contacts__name">Блинов Евгений Владимирович</span>
						<span>Заместитель директора</span>
						<a href="tel:89080532712" class="contacts__phone">8-908-053-27-12</a>
						<a href="mailto:den.ruskin@roof-empire.ru" class="contacts__email">den.ruskin@roof-empire.ru</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Contacts"
}
</script>

<style lang="scss">
.contacts {
	padding: 160px 0 60px 0;

	&__description {
		margin-bottom: 30px;
		font-family: $font-family-roboto-regular;
		font-size: 20px;
		line-height: 28px;
		text-align: center;
	}

	&__cards {
		display: flex;
		justify-content: space-between;
	}

	&__card {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 380px;
	}

	&__avatar {
		width: 210px;
		height: 205px;
	}

	&__text {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 45px 0;
		width: 100%;
		font-family: $font-family-roboto-regular;
		background-color: $color-main-light;
	}

	&__name {
		font-family: $font-family-ptsans-narrow-bold;
		font-size: 26px;
		letter-spacing: 0.5px;
	}

	&__phone {
		margin-top: 40px;
		margin-bottom: 5px;
	}

	&__email {
		color: $color-main-dark;
	}
}
</style>
