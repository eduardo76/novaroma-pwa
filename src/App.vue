<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store/app'
const appStore = useAppStore();

const router = useRouter();

onMounted(() => {
  if (!appStore.user.id) {
    router.push({ name: 'Login'})
  }
})

</script>
<template>

  <router-view></router-view>

</template>


