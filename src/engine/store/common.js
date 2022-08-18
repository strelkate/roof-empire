import router from "../../router/router";

function getDefaultRoofType(id, name, img) {
	return {
		id: id,
		name: name,
		img: img,
	}
}

export let roofTypes = [
	getDefaultRoofType(1, "Фальцевая кровля", require("../../assets/images/roof_types/coverings.jpg")),
	getDefaultRoofType(3, "Медная кровля", require("../../assets/images/roof_types/copper.png")),
	getDefaultRoofType(5, "Натуральная черепица", require("../../assets/images/roof_types/natural_shingles.png")),
	getDefaultRoofType(4, "Шинглас", require("../../assets/images/roof_types/shingles.png")),
	getDefaultRoofType(2, "Металлочерепица", require("../../assets/images/roof_types/metal_tile.png")),
]

export const moduleCommon = {
	state: {
		roofTypes: roofTypes,
	},
	mutations: {},
	getters: {
		roofTypes: state => state.roofTypes,
		getRoofTypeById: (state) => (id) => {
			return state.roofTypes.find(n => n.id === id)
		},
	},
	actions: {
		routerPush({}, {name, params}) {
			router.push({name: name, params: params})
			setTimeout(() => {
				window.scrollTo(0, 0);
			}, 1);
		},
	},
}
