import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/',
    children: [
      {
        path: "",
        component: import("./layouts/default.vue"),
        children: [
          {
            path: "",
            component: import("./pages/home/index.vue")
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