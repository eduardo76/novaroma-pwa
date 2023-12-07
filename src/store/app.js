// Utilities
import { defineStore } from 'pinia'
import { request } from '@/plugins/axios';

export const useAppStore = defineStore('app', {
  state: () => ({
    tasks: [],

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
      // Envia a task para o servidor
      const { data } = await request.post('/tasks', this.task);
      // Adiciona a task no Array de tasks
      this.tasks.push(data);
    },

    async updateTask() {
      // Atualiza a task no servidor
      await request.put(`/tasks/${this.task.id}`, this.task);
      // Lista as tasks atualizadas do servidor
      await this.listTasks();
    },

    async updateTaskStatus(task) {
      // Atualiza o status da task no servidor
      await request.put(`/tasks/${task.id}/update-status`, task);
      // Lista as tasks atualizadas do servidor
      await this.listTasks();
    },

    async deleteTask(task) {
      // remve a task do servidor
      await request.delete(`/tasks/${task.id}`);
      // Lista as tasks atualizadas do servidor
      await this.listTasks();
    },

    async loginUser(user) {
      try {
        // Tenta autenticar o usuário no servidor
        const { data } = await request.post('/users/login', user);
        // Atualizar o usuário autenticado
        this.user = data.user;
        // Retorna true para informar que o usuário é válido
        return true;
      } catch (error) {
        return false;
      }
    },

    async listTasks() {
      try {
        // Lista as tasks do servidor
        const { data } = await request.get('/tasks');
        // Salva a lista de tasks no array de tasks
        this.tasks = data;
      } catch (error) {
        // Se não retornar nada do servidor, zerar a lista de task
        this.tasks = [];
      }
    }
  },

})
