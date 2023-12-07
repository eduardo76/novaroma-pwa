<script setup>
  import { computed } from 'vue';
  import { useAppStore } from '@/store/app';
  const appStore = useAppStore();

  const tasks_count = computed(() => appStore.tasks.length);

import MeuComponente from '@/components/MeuComponente.vue';
</script>

<template>
  <v-card color="primary" class="mb-5">
    <v-card-title class="text-h5">
      Tarefas <span v-if="tasks_count > 0">({{ tasks_count }})</span>
    </v-card-title>

    <v-card-text>Clique no botão abaixo para adicionar novas tarefas</v-card-text>

    <v-card-actions>
      <v-btn class="ms-2" variant="outlined" size="small" @click="$router.push({ name: 'TasksList' })">
        Adicionar
      </v-btn>
    </v-card-actions>
  </v-card>

  <!-- <meu-componente></meu-componente> -->

</template>


<style lang="scss" scoped></style>
