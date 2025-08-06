import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import defaultLayout from "./layouts/default.vue"
import homePage from "./pages/home/index.vue"
import qa from "./pages/q&a/index.vue"

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
          },
          {
            path: "/giai-dap-thac-mac",
            component: qa
          },
        ]
      }
    ]
   },
]

export const router = createRouter({
  history: createWebHistory("/tongkimphat/"),
  routes,
})