# Manual para criar um app PWA usando o Vue + Vuetify
# Estamos mudando para o PWA devido ao curto tempo que temos para finalizar o projeto

# Criar projeto Vuetify
npm create vuetify

# Digitar nome do projeto
Exemplo: aplicacao-pwa

# Escolher as opções
Essentials (Vuetify, VueRouter, Pine)
Use TypeScript? No
npm

# Aguardar download e criação da estrutura de pastas

# Entrar na pasta
cd aplicaca-pwa

# Abrir com o vscode
code .

# No terminal do vscode rodar aplicação. Abrir o endereço no navegador
npm run dev

# Instalar o plugin do vite pua
npm install -D vite-plugin-pwa

# Editar o arquivo vite.config.js e adicionar as linhas abaixo após a linha "plugins: ["

    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Minha Aplicação PWA',
        short_name: 'MeuApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        "display": "standalone",
        icons: [
          {
            src: '/images/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        "screenshots": [
          {
            "src": "/images/screenshot1.png",
            "type": "image/png",
            "sizes": "540x720",
            "form_factor": "narrow"
          },
          {
            "src": "/images/screenshot2.jpg",
            "type": "image/jpg",
            "sizes": "720x540",
            "form_factor": "wide"
          }
        ]
      }
    }),

# Criar uma pasta dentro de public chamada images
public/images

# Copiar o arquivo "src/assets/logo.png" para "public/images/pwa-512x512.png" e "public/images/pwa-192x192.png"

# Acessar o site https://imageresizer.com/pt e converter o tamanho da imagem 192x192

# Instalar o Surge
npm install -g surge

# Criar conta surge colocando email e senha
surge login

# Buildar o projeto
npm run build

# Publicar projeto
surge dist <seunome>.surge.sh

# Acessar pelo navegador ou pelo cular
https://<seunome>.surge.sh

