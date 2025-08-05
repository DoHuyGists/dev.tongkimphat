import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import defaultLayout from "./layouts/default.vue"
import homePage from "./pages/home/index.vue"

const routes = [
  { 
    path: '/',
    children: [
      {
        path: "",
        component: defaultLayout,
        children: [
          {
            path: "",
            component: homePage
          }
        ]
      }
    ]
   },
]

export const router = createRouter({
  history: createWebHistory("/tongkimphat/"),
  routes,
})