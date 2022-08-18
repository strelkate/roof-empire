<template>
	<div class="service-details">
		<div class="container">
			<div class="service-details__wrapper">
				<div class="menu">
					<a href="#" class="menu__back" @click="routerPush({name:'services'})">< Назад к списку</a>
					<div
						class="menu__item"
						v-for="(item, index) in services"
						:key="index"
						:class="ifActive(item.id)"
						@click="onMenuItemClick(item.id)"
					>
						{{ item.name }}
					</div>
				</div>
				<div class="service-details__content">
					<h2 class="service-details__title">{{ service.name }}</h2>
					<ServiceDetailsItem @updated="updated" />
					<div class="service-details__features features">
						<div class="features__item">
							<div class="features__marker"></div>
							<div class="features__text">{{ service.features[0] }}</div>
						</div>
						<div class="features__item">
							<div class="features__marker"></div>
							<div class="features__text">{{ service.features[1] }}</div>
						</div>
						<button class="features__button" @click="routerPush({name: 'contacts'})">заказать</button>
					</div>
					<div class="service-details__subtitle">Подробнее об услуге:</div>
					<div class="service-details__description">{{ service.description }}</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import ServiceDetailsItem from "./ServiceDetailsItem";

export default {
	name: "ServiceDetails",
	components: {ServiceDetailsItem},
	data: () => ({
		currentPhotoIndex: 0,
	}),
	methods: {
		...mapActions(['routerPush']),
		ifActive(id) {
			return id === this.service.id ? 'menu__item--active' : ''
		},
		onMenuItemClick(id) {
			this.currentPhotoIndex = 0
			if (this.$route.name === 'service-details' && this.$route.params.id === id) {
				return
			}

			this.routerPush({name: 'service-details', params: {'id': id}})
		},
		updated(a) {
			console.log('a', a)
		}
	},
	computed: {
		...mapGetters(['services', 'getServicesById', 'getDefaultService']),
		service() {
			let id = this.$route ? parseInt(this.$route.params.id) : 0
			if (id > 0) {
				return this.getServicesById(id)
			}
			return this.getDefaultService
		},
	},
}
</script>

<style lang="scss">
.service-details {
	&__wrapper {
		padding: 160px 0 60px 0;
		display: flex;
	}

	&__content {
		margin-left: 50px;
		width: 100%;
	}

	&__title {
		margin: 0 0 20px 0;
		font-family: $font-family-ptsans-narrow-bold;
		font-size: 45px;
		font-weight: 700;
	}

	&__subtitle {
		font-family: $font-family-ptsans-narrow-bold;
		font-size: 29px;
		font-weight: 700;
		letter-spacing: 0.5px;
	}

	&__description {
		margin-top: 14px;
		font-family: $font-family-roboto-regular;
		font-size: 16px;
		line-height: 1.5em;
		text-align: justify;
		white-space: pre-line;
	}
}

.menu {
	display: flex;
	flex-direction: column;

	&__back {
		color: $color-main-dark;
		cursor: pointer;
		padding-right: 10px;
		margin-bottom: 10px;
	}

	&__item {
		width: 310px;
		padding: 15px;
		margin-top: 5px;
		cursor: pointer;

		&--active {
			background-color: $color-main-light;
		}

		&:hover {
			background-color: $color-main-light;
		}
	}
}

.features {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 40px 0;
	background-color: $color-main-light;
	padding: 30px;

	&__item {
		max-width: 325px;
		display: flex;
		align-items: center;
	}

	&__marker {
		margin-right: 10px;
		max-width: 8px;
		width: 100%;
		height: 40px;
		background-color: $color-main-dark;
		border-radius: 3px;
	}

	&__text {
		font-family: $font-family-roboto-regular;
		font-size: 16px;
	}

	&__button {
		border: 2px solid $color-main-light;
		border-radius: 10px;
		padding: 10px 30px;
		font-family: $font-family-ptsans-narrow-bold;
		font-size: 25px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		color: $color-main-light;
		background-color: $color-main-dark;
		cursor: pointer;

		&:hover {
			color: $color-main-dark;
			background-color: $color-main-light;
			border: 2px solid $color-main-dark;
		}
	}
}
</style>
