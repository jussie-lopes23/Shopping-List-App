Shopping List App 🛒
Um aplicativo de lista de compras simples e funcional, desenvolvido com React Native e Expo.

📜 Sobre o Projeto
Este é um aplicativo para gerenciar listas de compras, permitindo ao usuário adicionar, remover, e marcar itens como comprados. Os itens são salvos no armazenamento local do dispositivo, garantindo que os dados persistam entre as sessões.

✨ Funcionalidades
* Adicionar itens: Adicione novos itens à sua lista de compras.
* Remover itens: Remova itens individualmente.
* Marcar como comprado: Altere o status de um item para pendente ou comprado.
* Filtrar itens: Visualize os itens pendentes ou os já comprados.
* Limpar a lista: Remova todos os itens da lista de uma só vez.
* Persistência de dados: Os itens são salvos localmente no dispositivo usando AsyncStorage.

🛠️ Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

* React Native: Framework para desenvolvimento de aplicativos móveis multiplataforma.
* Expo: Plataforma e conjunto de ferramentas para construir e implantar aplicativos React Native.
* TypeScript: Superset do JavaScript que adiciona tipagem estática.
* AsyncStorage: Para armazenamento local de dados no dispositivo.
* Lucide React Native: Biblioteca de ícones.

📂 Estrutura de Pastas
O projeto está organizado da seguinte forma:

shoppingList/
├── .expo/

├── src/

│   ├── app/

│   │   └── Home/ # Tela principal da aplicação
│   ├── assets/           # Imagens e outros recursos estáticos

│   ├── components/       # Componentes reutilizáveis (Botão, Input, etc.)

│   ├── storage/          # Lógica de armazenamento local

│   └── types/            # Definições de tipos do TypeScript

├── .gitignore

├── app.json              # Configurações do Expo

├── package.json          # Dependências e scripts do projeto

└── tsconfig.json         # Configurações do TypeScript

# 🚀 Como Rodar o Projeto
Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

#Pré-requisitos
Antes de começar, você precisará ter o Node.js (que inclui o npm) e o Expo CLI instalados em sua máquina.

# Instale o Expo CLI globalmente, caso ainda não o tenha
npm install -g expo-cli

# Clonar repositório e instalar dependências
Clone o repositório: git clone https://github.com/jussie-lopes23/Shopping-List-App.git

Mude para a pasta cd shopping-list-app

Instale as dependências: npm install

# Iniciar o servidor de desenvolvimento e rodar aplicação
npm start ou npx expo start

Após iniciar o servidor, um QR code será exibido no terminal.

*Dispositivo Físico: Baixe o aplicativo Expo Go na App Store (iOS) ou Google Play (Android) e escaneie o QR code.
*Emulador:
  * Para Android, pressione "a" no terminal com o Expo em execução. Para isso é necessário ter instalado e configurado o Android Studio.
  * Para iOS, pressione "i" no terminal com o Expo em execução. Para isso é necessário ter instalado e configurado o Xcode.
