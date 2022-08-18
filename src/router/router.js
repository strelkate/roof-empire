import Vue from 'vue'
import Router from 'vue-router'

const Main = () => import('../ui/Main.vue')
const Services = () => import('../ui/Services.vue')
const ServiceDetails = () => import('../ui/ServiceDetails.vue')
const Prices = () => import('../ui/Prices.vue')
const Portfolio = () => import('../ui/Portfolio.vue')
const About = () => import('../ui/About.vue')
const Contacts = () => import('../ui/Contacts.vue')

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    description: "Кровельные работы любой сложности в Челябинске и Челябинской области. \n" +
      "Кровля под ключ. Фальц, черепица и т.д. \n" +
      "Огромный опыт. Выгодные цены. Гарантия. Телефон: 8-908-044-55-30.",
    meta: {
      title: 'Империя кровли',
      metaTags: [
        {
          name: 'description',
          content: "Кровельные работы любой сложности в Челябинске и Челябинской области. \n" +
            "Кровля под ключ. Фальц, черепица и т.д. \n" +
            "Огромный опыт. Выгодные цены. Гарантия. Телефон: 8-908-044-55-30.",
        },
        {
          property: 'og:description',
          content: "Кровельные работы любой сложности в Челябинске и Челябинской области. \n" +
            "Кровля под ключ. Фальц, черепица и т.д. \n" +
            "Огромный опыт. Выгодные цены. Гарантия. Телефон: 8-908-044-55-30.",
        }
      ]
    }
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
  },
  {
    path: '/service-details/:id',
    name: 'service-details',
    component: ServiceDetails,
  },
  {
    path: '/prices',
    name: 'prices',
    component: Prices,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
  },
  {
    path: '*',
    redirect: '/',
  },
]

export default new Router({
  mode: 'history',
  routes
})




