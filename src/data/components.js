export default {
  LandingPage: () =>
    import(
      /* webpackChunkName: "c-landing-page" */ '@/components/LandingPage.vue'
    ),
  Sidebar: () =>
    import(/* webpackChunkName: "c-sidebar" */ '@/components/Sidebar.vue'),
  Loader: () =>
    import(/* webpackChunkName: "c-loader" */ '@/components/common/Loader.vue'),
  Experiences: () =>
    import(
      /* webpackChunkName: "c-experiences" */ '@/components/Experiences.vue'
    ),
  About: () =>
    import(/* webpackChunkName: "c-about" */ '@/components/About.vue'),
  Skills: () =>
    import(/* webpackChunkName: "c-skills" */ '@/components/Skills.vue'),
  Projects: () =>
    import(/* webpackChunkName: "c-projects" */ '@/components/Projects.vue'),
  Achievements: () =>
    import(/* webpackChunkName: "c-achievements" */ '@/components/Achievements.vue'),
  Contact: () =>
    import(/* webpackChunkName: "c-contact" */ '@/components/Contact.vue')
}
