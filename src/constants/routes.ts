import { Reading, Document, Setting } from '@element-plus/icons-vue'
import HomeView from '../views/HomeView.vue'

export const menus = [
  {
    icon: Reading,
    path: '/reading',
    name: 'reading',
    title: 'Read Area',
    component: HomeView
  },
  {
    icon: Document,
    path: '/expenses',
    name: 'expenses',
    title: 'Expenses Record',
    component: HomeView
  },
  {
    icon: Setting,
    path: '/settings',
    name: 'settings',
    title: 'Profile Settings',
    component: HomeView
  }
]
