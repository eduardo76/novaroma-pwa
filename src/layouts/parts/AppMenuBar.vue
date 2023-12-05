<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAppStore } from '@/store/app'

const route = useRoute();
const router = useRouter();
const appStore = useAppStore();

const refreshing = ref(false);
const isTaskList = computed(() => route.name == 'TasksList')

const listTasks = async () => {
  refreshing.value = true;
  await appStore.listTasks();
  refreshing.value = false;
}

const logout = () => {
  appStore.user = {};
  router.push({ name: 'Login'})
}

const action1 = () => {
  alert("Ação 1");
}

const items_menu = ref([
  { title: 'Click Me', icon: 'mdi-account', action: action1 },
  { title: 'Click Me', icon: 'mdi-account', action: action1 },
  { title: 'Click Me', icon: 'mdi-account', action: action1 },
  { title: 'Click Me 2', icon: 'mdi-account', action: action1 },
])

</script>

<template>

  <v-fab-transition group>
    <v-btn v-if="isTaskList" icon="mdi-refresh" :loading="refreshing" @click="listTasks"></v-btn>
  </v-fab-transition>

  <v-btn icon>
    <v-icon>mdi-dots-vertical</v-icon>
    <v-menu activator="parent">
      <v-list color="primary">
        <v-list-item prepend-icon="mdi-check-bold" title="Tarefas" :to="{ name: 'TasksList' }"></v-list-item>
        <v-divider></v-divider>
        <v-list-item exact prepend-icon="mdi-logout" title="Sair" @click="logout"></v-list-item>
      </v-list>
    </v-menu>
  </v-btn>

</template>

<style lang="scss" scoped>

</style>
