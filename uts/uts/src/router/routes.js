
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '/', component: () => import('pages/Admin/home/datajam.vue') },
      { path: '/datajam', component: () => import('pages/Admin/home/datajam.vue') },
      { path: 'editdatajam/:id', component: () => import('pages/Admin/home/editdatajam.vue') },
      { path: 'inputdatajam', component: () => import('pages/Admin/home/inputdatajam.vue') },
      { path: 'halaman', component: () => import('pages/Admin/home/halaman.vue') }
    ]
  },
  {
    path: '/customer',
    component: () => import('layouts/PembeliLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '/', component: () => import('pages/Customer/halamancustomer/halamancustomer.vue') },
      { path: '/halamancustomer', component: () => import('pages/Customer/halamancustomer/halamancustomer.vue') },
      { path: 'transak', component: () => import('pages/Customer/historypembelanja/historybelanja.vue') },
      { path: '/penilaian', component: () => import('pages/Customer/penilaian/penilaian.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/admin', component: () => import('pages/users/login.vue') },
      { path: 'auth/regis', component: () => import('pages/users/regis.vue') }
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
