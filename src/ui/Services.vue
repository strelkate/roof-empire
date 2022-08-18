<template>
	<div class="services">
		<div class="container__2">
			<div
				class="services__block"
				v-for="(group, index) in serviceGroups"
				:key="index"
			>
				<h2 class="services__title">{{ group.name }}</h2>
				<div class="services__content">
					<div
						class="services__item"
						v-for="(item, index2) in getServicesByGroupId(group.id)"
						:key="index2"
						@click="onItemClick(item.id)"
					>
						<img
							class="services__img"
							:src="item.img"
							alt="Img: service picture"
						/>
						<div class="services__subtitle">{{ item.name }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
	name: "Services",
	methods: {
		...mapActions(['routerPush']),
		onItemClick(id) {
			if (this.$route.name === 'service-details' && this.$route.params.id === id) {
				return
			}
			this.routerPush({name: 'service-details', params: {"id": id},})
		},
	},
	computed: {
		...mapGetters(['serviceGroups', 'getServicesByGroupId',]),
	},
}
</script>

<style lang="scss">
.services {
	padding: 160px 0 60px 0;

	&__block {
		margin-bottom: 30px;
	}

	&__title {
		margin: 0 0 20px 0;
		font-family: $font-family-ptsans-narrow-bold;
		font-size: 45px;
		font-weight: 700;
		text-align: center;
		letter-spacing: 0.5px;
	}

	&__content {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	&__item {
		margin: 0 30px 30px 0;
		cursor: pointer;

		&:nth-child(3n) {
			margin-right: 0;
		}
	}

	&__img {
		width: 300px;
		height: 220px;
	}

	&__subtitle {
		font-family: $font-family-roboto-regular;
	}
}
</style>
