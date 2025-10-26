import { createRouter, createWebHistory } from 'vue-router'
import components from '@/data/components'

const routes = [
  { path: '/', name: 'About', component: components.About },
  { path: '/skills', name: 'Skills', component: components.Skills },
  { path: '/projects', name: 'Projects', component: components.Projects },
  { path: '/experiences', name: 'Experiences', component: components.Experiences },
  { path: '/contact', name: 'Contact', component: components.Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router