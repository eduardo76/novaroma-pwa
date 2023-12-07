<script setup>
import { ref , computed, onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAppStore } from '@/store/app';

const router = useRouter();
const route = useRoute();
const appStore = useAppStore();

const loading = ref(false);
const form_valid = ref(true);

// const task = ref({
//   id: null,
//   title: '',
//   description: '',
//   done: false
// });

// Mapeia a task selecionada do store
const task = computed(() => appStore.task);

onMounted(() => {

  if (route.name == 'TasksEdit') {
    appStore.findTaskById(route.params.id);
  } else {
    appStore.createNewTask();
  }

})


// Cria uma regra de validação do formulário
// Referência: https://vuetifyjs.com/en/components/forms/#rules
const campoObrigatorio = value => !!value || "Campo obrigatório";

// Funções da tela
const cancelar = () => {
  // Cancelar e volta para a tela de tarefas
  router.push({ name: 'TasksList' });
}

const salvar = async () => {

  try {
    loading.value = true;

    if (route.name == 'TasksAdd') {
      await appStore.saveTask();
    } else {
      await appStore.updateTask();
    }

    // Navega para a lista de tarefas
    router.push({ name: 'TasksList' });

  } catch (error) {
    console.log(error);
    alert("Não foi possível salvar a task")
  } finally {
    loading.value = false;
  }
}
</script>


<template>
  <v-form v-model="form_valid" ref="form">
    <v-card>
      <v-card-title>
        {{ $route.meta.title }}
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>

        <v-text-field
          v-model="appStore.task.title"
          label="Título"
          name="title"
          id="title"
          :rules="[campoObrigatorio]"
        ></v-text-field>

        <v-textarea
          v-model="appStore.task.description"
          label="Descrição"
          name="description"
          id="description"
        ></v-textarea>

        <v-checkbox
          v-model="appStore.task.done"
          label="Pronto"
          name="done"
          id="done"
          :disabled="$route.name == 'TasksAdd'"
        ></v-checkbox>

      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="elevated" color="primary" elevation="2" :loading="loading" :disabled="!form_valid" @click="salvar">Salvar</v-btn>
        <v-btn variant="text" @click="cancelar" :disabled="loading">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>


<style lang="scss" scoped>

</style>
