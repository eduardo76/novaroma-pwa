<script setup>
import { ref } from 'vue';

const contador = ref(0);

function incrementar() {
  contador.value++;
}

function decrementar() {
  contador.value--;
}

</script>

<template>

  <h1>Hello World</h1>

  <h1>Contador: {{ contador }}</h1>
  <div>
    <v-btn
      prepend-icon="mdi-plus"
      color="primary"
      @click="incrementar"
    >Incrementar</v-btn>

    <v-btn
      prepend-icon="mdi-minus"
      color="primary"
      @click="decrementar"
    >Decrementar</v-btn>
  </div>

</template>

<style lang="scss" scoped>

</style>
