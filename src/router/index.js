// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [

      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: "Início",
        }
      },
      {
        path: '/tasks',
        name: 'TasksList',
        component: () => import('@/views/TaskList.vue'),
        meta: {
          title: "Lista de Tarefas",
        }
      },
      {
        path: '/tasks/add',
        name: 'TasksAdd',
        component: () => import('@/views/TaskForm.vue'),
        meta: {
          title: "Adicionar Tarefa",
        }
      },
      {
        path: '/tasks/:id',
        name: 'TasksEdit',
        component: () => import('@/views/TaskForm.vue'),
        meta: {
          title: "Editar Tarefa",
        }
      }
    ]
  },


  {
    path: '/login',
    name: 'Login',
    component: () => import('@/layouts/Login.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
