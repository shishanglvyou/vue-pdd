export default [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import('@/views/Home')
  },
  {
    path:'/chat',
    component:()=>import('@/views/Chat')
  },
  {
    path:'/recommend',
    component:()=>import('@/views/Recommend')
  },
  {
    path:'/search',
    component:()=>import('@/views/Search')
  },
  {
    path:'/mine',
    component:()=>import('@/views/Mine')
  },
]
