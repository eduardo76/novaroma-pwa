<script setup>
  import { ref, reactive, computed } from 'vue';
  import { useDisplay } from 'vuetify'
  import { useAppStore } from '@/store/app'
  import { useRouter } from 'vue-router';


  // Carrega o controlador de rotas
  // Referência: https://router.vuejs.org/guide/essentials/named-routes.html#Named-Routes
  const router = useRouter();

  // Carrega o contgrolador do store pinia
  // Referencia: https://pinia.vuejs.org/core-concepts/state.html#Accessing-the-state
  const appStore = useAppStore();

  // Retorna se o tamanho de tela é de um dispositivo móvel
  // Referência: https://vuetifyjs.com/en/features/display-and-platform/
  const { mobile } = useDisplay();

  // Variáveis da tela
  // Referencia: https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state-1
  const form_valid = ref(true);
  const password_visible = ref(false);
  const user = reactive({
    username: 'fulano@fulano.com',
    password: '123'
  })

  // Computed Properties
  // Retorna um valor calculado
  // Referência: https://vuejs.org/guide/essentials/computed.html
  const elevation = computed(() => {
    return mobile.value ? '0' : '8';
  })

  // Cria uma regra de validação do formulário
  // Referência: https://vuetifyjs.com/en/components/forms/#rules
  const campoObrigatorio = value => !!value || "Campo obrigatório";


  // Funções da tela de login
  const login = async function() {

    const autenticated_user = await appStore.loginUser(user);

    if (!autenticated_user) {
      alert('Usuario ou senha inválidos');
    } else {
      router.push({ name: 'TasksList' });
    }

  }
</script>

<template>
  <div class="tela-cheia" :class="{ 'fundo-cinza': !mobile }">

      <v-card
        class="pa-10"
        width="100%"
        max-width="448px"
        rounded="lg"

        :elevation="elevation"
      >

        <div class="d-flex justify-center">
          <v-img class="mt-6 mb-10" max-width="228" src="/images/novaroma.png"></v-img>
        </div>

        <v-form v-model="form_valid" ref="form">

          <div class="text-subtitle-1 text-medium-emphasis">Usuário</div>

          <v-text-field
            v-model="user.username"
            density="compact"
            placeholder="Digite o usuário"
            prepend-inner-icon="mdi-account"
            variant="outlined"
            required
            autofocus

            :rules="[campoObrigatorio]"
          ></v-text-field>

          <div class="text-subtitle-1 text-medium-emphasis">
            Senha
          </div>

          <v-text-field
            v-model="user.password"
            density="compact"
            placeholder="Digite a senha"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            required

            :rules="[campoObrigatorio]"
            :append-inner-icon="password_visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="password_visible ? 'text' : 'password'"

            @click:append-inner="password_visible = !password_visible"
          ></v-text-field>

          <v-btn
            block
            class="my-8"
            color="primary"
            size="large"
            variant="tonal"

            :disabled="form_valid === false"

            @click="login"
          >
            Entrar
          </v-btn>
        </v-form>
      </v-card>
  </div>
</template>

<style>

.tela-cheia {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fundo-cinza {
  background-color: #FAFAFA;
}

</style>
