
const routes = [
  {
    path: '/',
    component: () => import('layouts/gym/GymBoxLayout.vue'),
    children: [
      { path: '', component: () => import('pages/GymBox/Index.vue') }
    ]
  },
  // start the routes for gym box
  {
    path: '/gym',
    component: () => import('layouts/gym/GymBoxLayout.vue'),
    children: [
      { path: '', component: () => import('pages/GymBox/Index.vue') }
    ]
  },
  {
    path: '/start/pushup',
    component: () => import('layouts/gym/BackLayout.vue'),
    children: [
      { path: '', component: () => import('pages/GymBox/PushUp.vue') }
    ]
  },
  {
    path: '/start/plank',
    component: () => import('layouts/gym/GymBoxLayout.vue'),
    children: [
      { path: '', component: () => import('pages/GymBox/Plank.vue') }
    ]
  },
  {
    path: '/stats',
    component: () => import('layouts/gym/GymBoxLayout.vue'),
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
