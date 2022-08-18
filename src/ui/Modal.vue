<template>
	<transition name="modal-fade">
		<div class="modal">
			<img class="modal__image" role="dialog" :src="currentImg" alt="Photo"/>
			<div class="modal__controls">
				<svg
					class="modal__icon modal__icon--arrow modal__icon--arrow-left"
					@click="onGalleryLeftClick"
				>
					<use xlink:href="../assets/icons/sprite.svg#arrow-prev"></use>
				</svg>
				<svg
					class="modal__icon modal__icon--arrow modal__icon--arrow-right"
					@click="onGalleryRightClick"
				>
					<use xlink:href="../assets/icons/sprite.svg#arrow-next"></use>
				</svg>
				<svg
					class="modal__icon modal__icon--close"
					@click="close"
				>
					<use xlink:href="../assets/icons/sprite.svg#close"></use>
				</svg>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "Modal",
	props: {
		gallery: {
			type: Array,
			required: true
		},
		currentPhotoIndex: {
			type: Number,
			default: 0,
		},
	},
	data: () => ({}),
	computed: {
		currentImg() {
			return this.gallery.length > 0 ? this.gallery[this.currentPhotoIndex].img : ''
		},
		currentCaption() {
			return this.gallery.length > 0 ? this.gallery[this.currentPhotoIndex].caption : ''
		}
	},
	methods: {
		onGalleryLeftClick() {
			let max = this.gallery.length - 1
			let newIndex = 0
			switch (this.currentPhotoIndex) {
				case 0:
					newIndex = max
					break
				default:
					newIndex = this.currentPhotoIndex - 1
			}
			this.onCurrentPhotoIndexChange(newIndex)
		},
		onGalleryRightClick() {
			let max = this.gallery.length - 1
			let newIndex = 0
			switch (this.currentPhotoIndex) {
				case max:
					newIndex = 0
					break
				default:
					newIndex = this.currentPhotoIndex + 1
			}
			this.onCurrentPhotoIndexChange(newIndex)
		},
		onCurrentPhotoIndexChange(newValue) {
			this.$emit('onCurrentPhotoIndexChange', newValue)
		},
		close() {
			this.$emit('close')
		},
	},
}
</script>

<style lang="scss">
.modal {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	display: flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -webkit-flex;

	justify-content: center;
	align-items: center;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.7);

	&__image {
		background: transparent;
		overflow: hidden;

		display: flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -webkit-flex;

		justify-content: center;
		align-items: center;
	}

	&__controls {
		position: absolute;
		width: 100%;
		height: 100%;

		display: flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -webkit-flex;

		flex-direction: row;
	}

	&__icon {
		cursor: pointer;
		position: absolute;

		&--close {
			width: 38px;
			height: 38px;
			top: 20px;
			right: 20px;
		}

		&--arrow {
			width: 40px;
			height: 70px;
			top: 50%;
			transform: translateY(-50%);

			&-left {
				left: 20px;
			}
			&-right{
				right: 20px;
			}
		}
	}
}

.caption {
	padding: 10px 15px;
	font-family: $font-family-roboto-regular;
}
</style>
