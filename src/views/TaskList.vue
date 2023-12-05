<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store/app'

const router = useRouter();
const appStore = useAppStore();

onMounted(() => {
  listTasks();
})

// Mapeia as tasks do store
const tasks = computed(() => appStore.tasks);
const tasks_count = computed(() => appStore.tasks.length);

// Funções da tela
const listTasks = async () => {
  await appStore.listTasks();
}

const editTask = function(task) {
  // Cancelar e volta para a tela de tarefas
  router.push({ name: 'TasksEdit', params: {id: task.id} });
}

const deleteTask = async function(task) {
  const confirmed = confirm("Deseja excluir essa tarefa?");

  if (confirmed) {
    await appStore.deleteTask(task);
  }
}

const updateTaskStatus = async function(task) {
  try {
    await appStore.updateTaskStatus(task);
  } catch (error) {
    alert("Não foi possível atualizar a tarefa")
  }
}

</script>

<template>
  <div class="d-flex pb-4">
    <v-spacer></v-spacer>
    <v-btn color="primary" variant="text" @click="$router.push({name: 'TasksAdd'})">Adicionar</v-btn>
  </div>

  <v-card v-if="tasks_count > 0">

    <v-list lines="three" select-strategy="classic">

      <v-list-subheader>{{ $route.meta.title }} <span v-if="tasks_count > 0">({{ tasks_count }})</span></v-list-subheader>

        <template v-for="(task, index) in tasks">
          <v-list-item>
            <template v-slot:prepend>
              <v-list-item-action start>
                <v-checkbox-btn
                  v-model="task.done"
                  color="primary"
                  :true-value="1"
                  :false-value="0"
                  @update:modelValue="updateTaskStatus(task)"
                ></v-checkbox-btn>
              </v-list-item-action>
            </template>

            <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">{{ task.title }}</v-list-item-title>

            <v-list-item-subtitle :class="{ 'text-decoration-line-through': task.done }">
              {{ task.description }}
            </v-list-item-subtitle>

            <template v-slot:append v-if="!task.done">
              <v-list-item-action>
                <v-btn icon="mdi-pencil" variant="text" size="small" @click="editTask(task)"></v-btn>
                <v-btn icon="mdi-delete" variant="text" size="small" @click="deleteTask(task)"></v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>

      </v-list>
  </v-card>

  <v-card v-else>
    <v-card-text class="d-flex justify-center align-center" style="height: 144px;">
      <p>Sem tarefas no momento</p>
    </v-card-text>
  </v-card>
</template>
