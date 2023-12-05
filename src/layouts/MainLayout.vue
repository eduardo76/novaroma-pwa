<script setup>
import { ref } from 'vue';

// Dados iniciais da aplicação
const title = ref("Tarefas");
const drawer = ref(false);
const settings = ref([]);

// Componentes
import AppDrawerOptions from "@/layouts/parts/AppDrawerOptions.vue";
import AppMenuBar from "@/layouts/parts/AppMenuBar.vue";
</script>

<template>
  <v-app id="inspire" style="background-color: #f5f5f5">
    <v-navigation-drawer v-model="drawer">
      <template v-slot:prepend>
        <v-toolbar color="primary">
          <v-app-bar-title>Menu</v-app-bar-title>
          <v-btn icon="mdi-close" @click="drawer = false"></v-btn>
        </v-toolbar>
      </template>

      <app-drawer-options></app-drawer-options>

    </v-navigation-drawer>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>{{ title }}</v-app-bar-title>

      <v-spacer></v-spacer>

      <app-menu-bar></app-menu-bar>

    </v-app-bar>

    <v-main>
      <v-container>

        <!-- router-view controla a exibição das rotas das telas que estão na pasta views e layouts -->
        <router-view></router-view>

      </v-container>
    </v-main>
  </v-app>
</template>



