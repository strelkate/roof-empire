import Vue from 'vue'
import Vuex from 'vuex'
import {moduleCommon} from "./common";
import {moduleServices} from "./services";
import {modulePortfolio} from "./portfolio";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common: moduleCommon,
    services: moduleServices,
    portfolio: modulePortfolio,
  }
})
