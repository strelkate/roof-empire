<template>
	<div class="service-item">
		<div v-if="service.type === 0" class="service-item__basic">
			<div class="service-item__main">
				<svg
					class="service-item__arrow service-item__arrow--left"
					@click="onServiceLeftClick"
				>
					<use xlink:href="../assets/icons/sprite.svg#arrow-prev"></use>
				</svg>
				<svg
					class="service-item__arrow service-item__arrow--right"
					@click="onServiceRightClick"
				>
					<use xlink:href="../assets/icons/sprite.svg#arrow-next"></use>
				</svg>
				<svg
					class="service-item__search"
					@click="showModal"
				>
					<use xlink:href="../assets/icons/sprite.svg#search"></use>
				</svg>

				<img
					class="service-item__image"
					:src="currentImg.length > 0? currentImg : defaultImg"
					alt="Photo: photo portfolio"
				/>

			</div>
			<div class="service-item__preview preview-service">
				<div
					class="preview-service__item"
					v-for="(item, index) in service.gallery"
					:key="index"
					@click="onServiceItemClick(index)"
				>
					<div v-if="index===currentPhotoIndex" class="preview-service__active"></div>
					<img
						class="preview-service__image"
						:src="item.img"
						alt="Photo: preview"
					/>
				</div>
			</div>
		</div>


		<div v-else-if="service.type === 1" class="service-item__mounting mounting">
			<div
				class="mounting__item"
				v-for="(item, index) in service.items"
				:key="index"
			>
				<img class="mounting__image" :src="item.img" alt=""/>
				<div class="mounting__title">{{ item.name }}</div>
			</div>
		</div>
		<modal
			:gallery="service.gallery"
			:currentPhotoIndex="currentPhotoIndex"
			@onCurrentPhotoIndexChange="(newValue)=>{currentPhotoIndex=newValue}"
			v-show="isModalVisible"
			@close="closeModal"
		/>

	</div>
</template>

<script>
import {mapGetters} from "vuex";
import Modal from "./Modal";

export default {
	name: "ServiceDetailsItem",
	components: {
		modal: Modal,
	},
	// props: {
	// 	updated: {
	// 		type: Function,
	// 		required: true
	// 	}
	// },
	data: () => ({
		currentImg: "",
		currentPhotoIndex: 0,
		isModalVisible: false,
	}),
	methods: {
		onServiceItemClick(index) {
			this.currentPhotoIndex = index
			this.currentImg = this.service.gallery[index].img
		},
		onServiceLeftClick() {
			let max = this.service.gallery.length - 1
			let newIndex = 0
			switch (this.currentPhotoIndex) {
				case 0:
					newIndex = max
					break
				default:
					newIndex = this.currentPhotoIndex - 1
			}
			this.currentPhotoIndex = newIndex
			this.currentImg = this.service.gallery[newIndex].img
		},
		onServiceRightClick() {
			let max = this.service.gallery.length - 1
			let newIndex = 0
			switch (this.currentPhotoIndex) {
				case max:
					newIndex = 0
					break
				default:
					newIndex = this.currentPhotoIndex + 1
			}
			this.currentPhotoIndex = newIndex
			this.currentImg = this.service.gallery[newIndex].img
		},
		showModal() {
			this.isModalVisible = true;
		},
		closeModal() {
			this.isModalVisible = false;
		},
	},
	computed: {
		...mapGetters(['services', 'getServicesById', 'getDefaultService']),
		service() {
			let id = this.$route ? parseInt(this.$route.params.id) : 0
			if (id > 0) {
				this.currentImg = ''
				return this.getServicesById(id)
			}
			return this.getDefaultService
		},
		defaultImg() {
			this.currentImg = this.service.gallery.length > 0 ? this.service.gallery[0].img : this.service.img
			return this.currentImg
		},
	},
	mounted() {
		this.$emit("updated", 123)
	}
}
</script>
<style lang="scss">
.service-item {
	&__basic {
		display: flex;
		align-items: start;
		justify-content: space-between;
	}

	&__main {
		position: relative;
		margin-right: 20px;
		width: 100%;
		max-width: 520px;
	}

	&__arrow {
		position: absolute;
		top: 50%;
		width: 25px;
		height: 45px;
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
		margin-top: 5px;
		width: 100%;
		height: 320px;
	}

	&__preview {
		display: flex;
		flex-wrap: wrap;
	}

	&__mounting {
		display: flex;
		justify-content: space-between;
	}

}

.preview-service {
	width: 100%;
	max-width: 350px;

	&__item {
		position: relative;
		margin-right: 10px;
		margin-top: 5px;
		cursor: pointer;

		&:nth-child(3n) {
			margin-right: 0;
		}
	}

	&__image {
		width: 110px;
		height: 75px;
	}

	&__active {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.3);
	}
}

.mounting {
	&__item {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		max-width: 170px;
	}

	&__image {
		margin-bottom: 10px;
		width: 100%;
	}

	&__title {
		font-family: $font-family-roboto-regular;
	}
}
</style>
