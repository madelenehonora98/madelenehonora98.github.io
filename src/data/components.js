export default {
  Sidebar: () =>
    import(/* webpackChunkName: "c-sidebar" */ '@/components/Sidebar.vue'),
  Home: () =>
    import(/* webpackChunkName: "c-sidebar" */ '@/components/Home.vue'),
  About: () =>
    import(/* webpackChunkName: "c-sidebar" */ '@/components/About.vue')
}
