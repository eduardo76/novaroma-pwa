// Utilities
import { defineStore } from 'pinia'
import { request as axios } from '@/plugins/axios';

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

    async getTask(id) {
      // remve a task do servidor
      const response = await axios.get(`/tasks/${id}`);
      this.task = response.data;
    },

    async saveTask() {
      // Envia a task para o servidor
      const response = await axios.post('/tasks', this.task);
      // Adiciona a task no Array de tasks
      this.tasks.push(response.data);
    },

    async updateTask() {
      // Atualiza a task no servidor
      await axios.put(`/tasks/${this.task.id}`, this.task);
      // Lista as tasks atualizadas do servidor
      await this.listTasks();
    },

    async updateTaskStatus(task) {
      // Atualiza o status da task no servidor
      await axios.put(`/tasks/${task.id}/update-status`, task);
      // Lista as tasks atualizadas do servidor
      await this.listTasks();
    },

    async deleteTask(task) {
      // remve a task do servidor
      await axios.delete(`/tasks/${task.id}`);
      // Lista as tasks atualizadas do servidor
      await this.listTasks();
    },

    async listTasks() {
      try {
        // Lista as tasks do servidor
        const response = await axios.get('/tasks');
        // Salva a lista de tasks no array de tasks
        this.tasks = response.data;
      } catch (error) {
        // Se não retornar nada do servidor, zerar a lista de task
        this.tasks = [];
      }
    },

    async loginUser(user) {
      try {
        // Tenta autenticar o usuário no servidor
        const response = await axios.post('/users/login', user);
        // Atualizar o usuário autenticado
        this.user = response.data.user;
        // Retorna true para informar que o usuário é válido
        return true;
      } catch (error) {
        return false;
      }
    }
  },

})
