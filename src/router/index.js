import { createRouter, createWebHistory } from 'vue-router'
import components from '@/data/components'

const routes = [
  {
    path: '/',
    name: 'Landing Page',
    component: components.LandingPage,
    meta: { isLanding: true }
  },
  { path: '/about', name: 'About', component: components.About },
  { path: '/skills', name: 'Skills', component: components.Skills },
  {
    path: '/experiences',
    name: 'Experiences',
    component: components.Experiences
  },
  { path: '/projects', name: 'Projects', component: components.Projects },
  {
    path: '/achievements',
    name: 'Achievements',
    component: components.Achievements
  },
  { path: '/contact', name: 'Contact', component: components.Contact }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
