<template>
	<div class="footer">
		<div class="container footer__wrapper">
			<div class="footer__menu">
				<div class="footer__logo" @click="menuClick(MenuMain)">
					<img alt="Империя крыш" src="../assets/icons/logo.png">
				</div>
				<div class="footer__links">
					<div
						class="footer__link"
						@click="menuClick(MenuMain)"
					>Главная
					</div>
					<div
						class="footer__link"
						@click="menuClick(MenuServices)"
					>Услуги
					</div>
					<a
						class="footer__link"
						@click="menuClick(MenuPrices)"
					>Цены
					</a>
					<a
						class="footer__link"
						@click="menuClick(MenuPortfolio)"
					>Портфолио
					</a>
					<a
						class="footer__link"
						@click="menuClick(MenuAbout)"
					>О нас
					</a>
					<a
						class="footer__link"
						@click="menuClick(MenuContacts)"
					>Контакты
					</a>
				</div>
			</div>
			<div class="footer__contacts">
				<a href="tel:89823194892" class="footer__contact footer__phone">
					<div class="footer__square">
						<svg class="footer__icon">
							<use xlink:href="../assets/icons/sprite.svg#phone"></use>
						</svg>
					</div>
					<span>8-982-319-48-92</span>
				</a>
				<a href="mailto:den.ruskin@roof-empire.ru" class="footer__contact">
					<div class="footer__square">
						<svg class="footer__icon">
							<use xlink:href="../assets/icons/sprite.svg#envelope"></use>
						</svg>
					</div>
					<span>den.ruskin@roof-empire.ru</span>
				</a>

			</div>
		</div>
	</div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
	name: "Footer",
	props: {
		isFooter: {
			type: Boolean,
			default: false,
		},
	},
	data: () => ({
		MenuMain: 'main',
		MenuServices: 'services',
		MenuPrices: 'prices',
		MenuPortfolio: 'portfolio',
		MenuAbout: 'about',
		MenuContacts: 'contacts',
	}),
	methods: {
		...mapActions(['routerPush']),
		menuClick(menu) {
			console.log('this.$route.name', this.$route.name, 'menu', menu)
			if (this.$route.name === menu) {
				return
			}
			this.routerPush({name: menu})
		},
	},
}

</script>

<style lang="scss">
.footer {
	z-index: 901;
	width: 100%;
	background-color: $color-main-light;

	&__wrapper {
		display: flex;
		justify-content: space-between;
		padding: 30px 0;
	}

	&__menu {
		display: flex;
	}

	&__logo {
		width: 115px;
		height: 57px;
	}

	&__links {
		display: grid;
		grid-column-gap: 40px;
		grid-template-columns: 1fr 1fr 1fr;
		padding: 0 70px;
	}

	&__link {
		cursor: pointer;

		&:hover {
			color: $color-main-dark;
		}
	}

	&__contacts {
		display: flex;
		flex-direction: column;
	}

	&__contact {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: $color-text;
	}

	&__phone {
		margin-bottom: 10px;
	}

	&__square {
		margin-right: 8px;
		padding: 2px;
		width: 28px;
		height: 28px;
		background-color: $color-main-dark;
		border-radius: 5px;
	}

	&__icon {
		width: 24px;
		height: 24px;
	}
}


</style>
