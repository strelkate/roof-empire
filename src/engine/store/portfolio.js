function getDefaultPortfolioItem(id, type_id, name, gallery = []) {
  return {
    id: id,
    type_id: type_id,
    name: name,
    gallery: gallery,
  }
}

export const modulePortfolio = {
  state: {
    portfolioItems: [
      getDefaultPortfolioItem(1, 1, "г. Южноуральск",
        [
          {img: require("../../assets/images/portfolio/covering/1/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/1/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/1/3.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 1, "Гольф клуб, г. Екатеринбург",
        [
          {img: require("../../assets/images/portfolio/covering/2/1/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/2/1/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/2/1/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/2/1/4.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 1, "Гольф клуб, г. Екатеринбург",
        [
          {img: require("../../assets/images/portfolio/covering/2/2/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/2/2/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/2/2/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/2/2/4.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/2/2/5.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 1, "пос. Лесной остров",
        [
          {img: require("../../assets/images/portfolio/covering/3/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/3/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/3/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/3/4.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/3/5.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 1, "пос. Лесной остров",
        [
          {img: require("../../assets/images/portfolio/covering/4/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/4/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/4/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/4/4.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/4/5.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 1, "пос. Лесной остров",
        [
          {img: require("../../assets/images/portfolio/covering/5/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/5/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/5/3.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 1, "пос. Лесной остров",
        [
          {img: require("../../assets/images/portfolio/covering/6/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/6/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/6/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/6/4.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/6/5.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/6/6.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/6/7.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/6/8.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 1, "пос. Новое поле",
        [
          {img: require("../../assets/images/portfolio/covering/7/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/4.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/5.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/6.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/7.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/8.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/9.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/10.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/11.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/12.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/13.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/14.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/15.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/16.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/17.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/18.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/7/19.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 1, "Увильды (Баня)",
        [
          {img: require("../../assets/images/portfolio/covering/8/1/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/8/1/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/8/1/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/8/1/4.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 1, "Увильды (Дом)",
        [
          {img: require("../../assets/images/portfolio/covering/8/2/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/8/2/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/8/2/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/8/2/4.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/8/2/5.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/covering/8/2/6.jpg"), caption: ""},
        ],
      ),

      getDefaultPortfolioItem(1, 2, "пос. Тарасовка",
        [
          {img: require("../../assets/images/portfolio/metal_tile/1/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/metal_tile/1/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/metal_tile/1/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/metal_tile/1/4.jpg"), caption: ""},
        ],
      ),

      getDefaultPortfolioItem(1, 3, "пос. Западные холмы",
        [
          {img: require("../../assets/images/portfolio/copper/1/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/1/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/1/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/1/4.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 3, "пос. Касарги",
        [
          {img: require("../../assets/images/portfolio/copper/2/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/2/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/2/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/2/4.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/2/5.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 3, "пос. Новое поле",
        [
          {img: require("../../assets/images/portfolio/copper/3/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/3/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/3/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/3/4.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/3/5.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 3, "село Петровка",
        [
          {img: require("../../assets/images/portfolio/copper/4/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/4/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/4/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/copper/4/4.jpg"), caption: ""},
        ],
      ),

      getDefaultPortfolioItem(1, 4, "пос. Карпов пруд 1",
        [
          {img: require("../../assets/images/portfolio/shingles/1/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/shingles/1/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/shingles/1/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/shingles/1/4.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 4, "пос. Карпов пруд 2",
        [
          {img: require("../../assets/images/portfolio/shingles/2/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/shingles/2/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/shingles/2/3.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/shingles/2/4.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/shingles/2/5.jpg"), caption: ""},
        ],
      ),

      getDefaultPortfolioItem(1, 5, "пос. Западный",
        [
          {img: require("../../assets/images/portfolio/natural_shingles/1/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/natural_shingles/1/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/natural_shingles/1/3.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 5, "пос. Карпов пруд",
        [
          {img: require("../../assets/images/portfolio/natural_shingles/2/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/natural_shingles/2/2.jpg"), caption: ""},
        ],
      ),
      getDefaultPortfolioItem(1, 5, "Увильды, Сайма",
        [
          {img: require("../../assets/images/portfolio/natural_shingles/3/1.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/natural_shingles/3/2.jpg"), caption: ""},
          {img: require("../../assets/images/portfolio/natural_shingles/3/3.jpg"), caption: ""},
        ],
      ),

    ],
  },
  mutations: {},
  getters: {
    portfolioItems: state => state.portfolioItems,
    getPortfolioItemsByTypeId: (state) => (id) => {
      return state.portfolioItems.filter(n => n.type_id === id)
    },
  },
  actions: {},
}