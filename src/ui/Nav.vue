<template>
	<div class="header">
		<div class="container header__wrapper">
			<div class="header__menu">
				<div class="header__logo" @click="menuClick(MenuMain)">
					<img alt="Империя крыш" src="../assets/icons/logo.png">
				</div>
				<div class="header__nav nav">
					<div
						class="nav__item"
						:class="ifActive(MenuMain)"
						@click="menuClick(MenuMain)"
					>Главная
					</div>
					<div
						class="nav__item"
						:class="ifActive(MenuServices)"
						@click="menuClick(MenuServices)"
					>Услуги
					</div>
					<div
						class="nav__item"
						:class="ifActive(MenuPrices)"
						@click="menuClick(MenuPrices)"
					>Цены
					</div>
					<div
						class="nav__item"
						:class="ifActive(MenuPortfolio)"
						@click="menuClick(MenuPortfolio)"
					>Портфолио
					</div>
					<div
						class="nav__item"
						:class="ifActive(MenuAbout)"
						@click="menuClick(MenuAbout)"
					>О нас
					</div>
					<div
						class="nav__item"
						:class="ifActive(MenuContacts)"
						@click="menuClick(MenuContacts)"
					>Контакты
					</div>
				</div>
			</div>
			<div class="header__contacts">
				<a href="tel:89823194892" class="header__contact header__contact--phone">
					<div class="header__square">
						<svg class="header__icon">
							<use xlink:href="../assets/icons/sprite.svg#phone"></use>
						</svg>
					</div>
					<span>8-982-319-48-92</span>
				</a>
				<a href="mailto:den.ruskin@roof-empire.ru" class="header__contact">
					<div class="header__square">
						<svg class="header__icon">
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
	name: "Nav",
	props: {
		isHeader: {
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
		ifActive(menu) {
			if (!this.isHeader) return ''
			if (this.$route.fullPath.startsWith(menu, 1))
				return 'nav__item--active'
			else if (menu === this.MenuMain && this.$route.fullPath === '/')
				return 'nav__item--active'
			else
				return ''
		},
	},
}
</script>

<style lang="scss">
.header {
	position: fixed;
	z-index: 901;
	width: 100%;
	background-color: $color-main-light;

	&__wrapper {
		display: flex;
		justify-content: space-between;
	}

	&__menu {
		display: flex;
		padding: 15px 0;
	}

	&__logo {
		width: 115px;
		height: 57px;
	}

	&__nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
	}

	&__contacts {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 0;
	}

	&__contact {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-decoration: none;
		color: $color-text;

		&--phone {
			margin-right: 25px;
		}
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

.nav {
	&__item {
		margin: 0 16px;
		border: 0 solid rgba(0, 0, 0, 0);
		border-bottom-width: 4px;
		padding: 13px 0;
		cursor: pointer;

		&--active {
			border: 0 solid $color-main-dark;
			border-bottom-width: 4px;
			border-radius: 3px;
		}

		&:hover {
			border: 0 solid $color-main-dark;
			border-bottom-width: 4px;
			border-radius: 3px;
		}
	}
}
</style>
