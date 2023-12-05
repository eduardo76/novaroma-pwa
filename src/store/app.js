// Utilities
import { defineStore } from 'pinia'
import { request } from '@/plugins/axios';

export const useAppStore = defineStore('app', {
  state: () => ({
    tasks: [
      // {
      //   id: 1,
      //   title: 'Fazer compras',
      //   description: 'Comprar mantimentos para a semana',
      //   done: false
      // },
      // {
      //   id: 2,
      //   title: 'Estudar JavaScript',
      //   description: 'Revisar conceitos básicos e avançados',
      //   done: true
      // },
      // {
      //   id: 3,
      //   title: 'Ir à academia',
      //   description: 'Treino de musculação e cardio',
      //   done: false
      // },
      // {
      //   id: 4,
      //   title: 'Ler livro',
      //   description: 'Concluir a leitura do livro atual',
      //   done: false
      // },
      // {
      //   id: 5,
      //   title: 'Preparar apresentação',
      //   description: 'Reunir material para a apresentação de segunda-feira',
      //   done: true
      // },
      // {
      //   id: 6,
      //   title: 'Assistir a série',
      //   description: 'Episódios atrasados da série favorita',
      //   done: false
      // },
      // {
      //   id: 7,
      //   title: 'Resolver exercícios',
      //   description: 'Praticar exercícios de programação',
      //   done: true
      // },
      // {
      //   id: 8,
      //   title: 'Limpar o apartamento',
      //   description: 'Realizar uma limpeza completa',
      //   done: false
      // },
      // {
      //   id: 9,
      //   title: 'Atualizar currículo',
      //   description: 'Adicionar novas experiências e habilidades',
      //   done: true
      // },
      // {
      //   id: 10,
      //   title: 'Planejar viagem',
      //   description: 'Pesquisar destinos e preparar roteiro',
      //   done: false
      // }
    ],

    task: {
      title: '',
      description: '',
      done: false
    },

    user: {}
  }),

  actions: {
    findTaskById(id) {
      const task = this.tasks.find(task => task.id == id);

      if (task) {
        this.task = task;
      } else {
        this.createNewTask();
      }
    },

    createNewTask() {
      this.task = {
        title: '',
        description: '',
        done: 0
      }
    },

    async saveTask() {
      const { data } = await request.post('/tasks', this.task);
      this.tasks.push(data);
    },

    async updateTask() {
      await request.put(`/tasks/${this.task.id}`, this.task);
      await this.listTasks();
    },

    async updateTaskStatus(task) {
      await request.put(`/tasks/${task.id}/update-status`, task);
      await this.listTasks();
    },

    async deleteTask(task) {
      await request.put(`/tasks/${task.id}`, task);
      await this.listTasks();
    },

    async loginUser(user) {

      try {
        const { data } = await request.post('/users/login', user);
        this.user = data.user;
        return true;
      } catch (error) {
        return false;
      }

    },

    async listTasks() {

      try {
        const { data } = await request.get('/tasks');
        this.tasks = data;
      } catch (error) {
        this.tasks = [];
      }

    }
  },

})
