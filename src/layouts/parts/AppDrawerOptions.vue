<script setup>

</script>

<template>
  <v-list nav color="primary">
    <v-list-item exact prepend-icon="mdi-home" title="Início" :to="{ name: 'Home' }"></v-list-item>
    <v-list-item prepend-icon="mdi-check-bold" title="Tarefas" :to="{ name: 'TasksList' }"></v-list-item>
    <v-divider></v-divider>
    <v-list-item exact prepend-icon="mdi-account-group-outline" title="Users"></v-list-item>
  </v-list>
</template>

<style lang="scss" scoped>

</style>
