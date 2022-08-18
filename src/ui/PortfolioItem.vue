<template>
	<div class="portfolio-item">
		<div class="portfolio-item__main">
			<svg
				class="portfolio-item__arrow portfolio-item__arrow--left"
				@click="onGalleryLeftClick"
			>
				<use xlink:href="../assets/icons/sprite.svg#arrow-prev"></use>
			</svg>
			<svg
				class="portfolio-item__arrow portfolio-item__arrow--right"
				@click="onGalleryRightClick"
			>
				<use xlink:href="../assets/icons/sprite.svg#arrow-next"></use>
			</svg>
			<svg
				class="portfolio-item__search"
				@click="showModal"
			>
				<use xlink:href="../assets/icons/sprite.svg#search"></use>
			</svg>
			<img
				class="portfolio-item__image"
				:src="currentImg.length > 0? currentImg : defaultImg"
				alt="Photo: photo portfolio"
			/>
		</div>
		<div class="portfolio-item__preview preview">
			<div
				class="preview__item"
				v-for="(it, index) in item.gallery"
				:key="index"
				@click="onGalleryItemClick(index)"
			>
				<div
					class="preview__active"
					v-if="index===currentPhotoIndex"
				>
				</div>
				<img
					class="preview__image"
					:src="it.img"
					alt="Photo: preview"
				/>
			</div>
		</div>

		<h3 class="portfolio-item__title">{{ item.name }}</h3>
		<div class="portfolio-item__subtitle" v-if="typeName.length > 0">{{ typeName }}</div>
		<modal
			:gallery="item.gallery"
			:currentPhotoIndex="currentPhotoIndex"
			@onCurrentPhotoIndexChange="(newValue)=>{currentPhotoIndex=newValue}"
			v-show="isModalVisible"
			@close="closeModal"
		/>
	</div>
</template>

<script>
import Modal from './Modal.vue';

export default {
	name: "PortfolioItem",
	components: {
		modal: Modal,
	},
	props: {
		item: {
			type: Object,
			required: true
		},
		typeName: {
			type: String,
			default: ""
		},
	},
	data: () => ({
		currentImg: "",
		currentPhotoIndex: 0,
		isModalVisible: false,
	}),
	methods: {
		onGalleryItemClick(index) {
			this.currentPhotoIndex = index
			this.currentImg = this.item.gallery[index].img
		},
		onGalleryLeftClick() {
			let max = this.item.gallery.length - 1
			let newIndex = 0
			switch (this.currentPhotoIndex) {
				case 0:
					newIndex = max
					break
				default:
					newIndex = this.currentPhotoIndex - 1
			}
			this.currentPhotoIndex = newIndex
			this.currentImg = this.item.gallery[newIndex].img
		},
		onGalleryRightClick() {
			let max = this.item.gallery.length - 1
			let newIndex = 0
			switch (this.currentPhotoIndex) {
				case max:
					newIndex = 0
					break
				default:
					newIndex = this.currentPhotoIndex + 1
			}
			this.currentPhotoIndex = newIndex
			this.currentImg = this.item.gallery[newIndex].img
		},
		showModal() {
			this.isModalVisible = true;
		},
		closeModal() {
			this.isModalVisible = false;
		},
	},
	computed: {
		defaultImg() {
			this.currentImg = this.item.gallery.length > 0 ? this.item.gallery[0].img : ""
			return this.currentImg
		},
	},
}
</script>

<style lang="scss">
.portfolio-item {
	max-width: 450px;

	&__main {
		position: relative;
		margin-bottom: 10px;
	}

	&__arrow {
		position: absolute;
		top: 50%;
		width: 20px;
		height: 40px;
		cursor: pointer;
		transform: translateY(-50%);

		&--left {
			left: 10px;
		}

		&--right {
			right: 10px;
		}
	}

	&__search {
		position: absolute;
		right: 10px;
		bottom: 10px;
		width: 36px;
		height: 36px;
		cursor: pointer;
	}

	&__image {
		width: 100%;
		height: 255px;
	}

	&__preview {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	&__title {
		margin: 5px 0;
		font-family: $font-family-ptsans-narrow-bold;
		font-weight: 700;
		font-size: 29px;
		letter-spacing: 0.5px;
	}

	&__subtitle {
		font-family: $font-family-roboto-regular;
		font-size: 16px;
	}
}

.preview {
	&__item {
		position: relative;
		margin-right: 6px;
		cursor: pointer;

		&:nth-child(5n) {
			margin-right: 0;
		}
	}

	&__image {
		width: 85px;
		height: 60px;
	}

	&__active {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.3);
	}
}
</style>
