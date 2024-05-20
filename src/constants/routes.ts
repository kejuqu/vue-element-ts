import { Reading, Document, Setting } from '@element-plus/icons-vue'

export const menus = [
  {
    icon: Reading,
    path: '/reading',
    name: 'reading',
    title: 'Read Area',
    component: () => import('../views/reading.vue')
  },
  {
    icon: Document,
    path: '/expenses',
    name: 'expenses',
    title: 'Expenses Record',
    component: () => import('../views/expenses.vue')
  },
  {
    icon: Setting,
    path: '/settings',
    name: 'settings',
    title: 'Profile Settings',
    component: () => import('../views/settings.vue')
  }
]
