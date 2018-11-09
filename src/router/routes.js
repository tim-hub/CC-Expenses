
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Expense/Index.vue') }
    ]
  },
  // start the routes for expense
  {
    path: '/expense',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Expense/Index.vue') }
    ]
  },
  {
    path: '/create',
    component: () => import('layouts/shared/BackLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Expense/Create.vue') }
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
