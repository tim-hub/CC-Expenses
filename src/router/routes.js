
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Expense/Index.vue') }
    ]
  },
  {
    path: '/create',
    component: () => import('layouts/BackLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Expense/Create.vue') }
    ]
  },
  {
    path: '/gym',
    component: () => import('layouts/GymBoxLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Expense/Index.vue') }
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
