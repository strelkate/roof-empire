<template>
	<div class="portfolio">
		<div class="container__2">
			<div class="portfolio__filters">
				<div
					class="portfolio__filter"
					:class="ifHeaderItemActive(0)? 'portfolio__filter--active':''"
					@click="onHeaderItemClick(0)"
				>
					Все {{ ifHeaderItemActive(0) ? '(' + currentItems.length + ')' : '' }}
				</div>
				<div
					class="portfolio__filter"
					v-for="(item, index) in roofTypes"
					:key="index"
					:class="ifHeaderItemActive(item.id)? 'portfolio__filter--active':''"
					@click="onHeaderItemClick(item.id)"
				>
					{{ item.name }}{{ ifHeaderItemActive(item.id) ? '(' + currentItems.length + ')' : '' }}
				</div>

			</div>

			<div class="portfolio__content">
				<PortfolioItem
					v-for="(item, index) in currentItems"
					:key="index"
					class="portfolio__item"
					:item="item"
					:typeName="currentRoofTypeId > 0? '' : getRoofTypeById(item.type_id).name">
				</PortfolioItem>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import PortfolioItem from './PortfolioItem';

export default {
	name: "Portfolio",
	components: {
		PortfolioItem,
	},
	data: () => ({
		currentRoofTypeId: 0,
	}),
	methods: {
		ifHeaderItemActive(id) {
			return id === this.currentRoofTypeId
		},
		onHeaderItemClick(id) {
			this.currentRoofTypeId = id
		},
	},
	computed: {
		...mapGetters(['roofTypes', 'getRoofTypeById', 'portfolioItems', 'getPortfolioItemsByTypeId']),
		currentItems() {
			return this.currentRoofTypeId > 0 ? this.getPortfolioItemsByTypeId(this.currentRoofTypeId) : this.portfolioItems
		}
	},
}
</script>

<style lang="scss">
.portfolio {
	padding: 160px 0 60px 0;

	&__filters {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 25px;
	}

	&__filter {
		font-family: $font-family-roboto-regular;
		font-size: 16px;
		cursor: pointer;

		&--active {
			font-family: $font-family-roboto-medium;
			font-size: 16px;
			font-weight: 500;
			color: $color-main-dark;
		}
		&:hover {
			color: $color-main-dark;
		}

	}

	&__content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
	}

	&__item {
		margin-bottom: 35px;
		width: 100%;
	}
}

</style>
