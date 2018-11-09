
const routes = [
  {
    path: '/',
    component: () => import('layouts/GymBoxLayout.vue'),
    children: [
      { path: '', component: () => import('pages/GymBox/Index.vue') }
    ]
  },
  // start the routes for gym box
  {
    path: '/gym',
    component: () => import('layouts/GymBoxLayout.vue'),
    children: [
      { path: '', component: () => import('pages/GymBox/Index.vue') }
    ]
  },
  {
    path: '/start',
    component: () => import('layouts/GymBoxLayout.vue'),
    children: [
      { path: '', component: () => import('pages/GymBox/Start.vue') }
    ]
  },
  {
    path: '/stats',
    component: () => import('layouts/GymBoxLayout.vue'),
    children: [
      { path: '', component: () => import('pages/GymBox/Stats.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
