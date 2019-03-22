import Home from './components/home.vue'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routers = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    component: Home
  },
  { path: '/foo', component: Foo},
  { path: '/bar', component: Bar }
]
export default routers
