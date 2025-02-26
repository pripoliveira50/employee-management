# Employee Management

## Sobre o Projeto

O **Employee Management** é um aplicativo mobile desenvolvido em **React Native** com **Expo**, projetado para facilitar o gerenciamento de funcionários em uma organização. Ele permite visualizar, buscar e organizar informações sobre os colaboradores de forma eficiente.

## Tecnologias Utilizadas

- **React Native 76**
- **Expo**
- **TypeScript**
- **Jest** (para testes unitários)
- **Testing Library**
- **TanStack Query (React Query)**
- **React hook form**

## Estrutura de Pastas

```
.
├── android/                 # Projeto Android (Expo Managed)
├── ios/                     # Projeto iOS (Expo Managed)
├── src/                     # Código-fonte principal
│   ├── components/          # Componentes reutilizáveis
│   ├── global/tokens/       # Tokens e estilos globais
│   ├── infra/               # Infraestrutura do projeto
│   ├── screens/             # Telas do aplicativo
│   ├── utils/               # Funções utilitárias
├── test/                    # Configuração de testes
├── jest.config.ts           # Configuração do Jest
├── tsconfig.json            # Configuração do TypeScript
├── metro.config.js          # Configuração do Metro bundler
├── package.json             # Dependências do projeto
└── README.md                # Documentação do projeto
```

## **Pré-requisitos**

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (recomendado: v18+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/):
  ```sh
  npm install -g expo-cli
  ```
- [Yarn](https://yarnpkg.com/) (opcional, se preferir Yarn ao invés de npm)

## **Como rodar o projeto**

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/pripoliveira50/employee-management.git
   cd employee-management
   ```

2. **Instale as dependências:**

   ```sh
   yarn install
   ```

3. **Inicie o Expo:**

   ```sh
   yarn start
   ```

4. **Execute no emulador ou dispositivo físico:**
   - Para **Android**:
     ```sh
     yarn android
     ```
   - Para **iOS** (no macOS):
     ```sh
     yarn ios
     ```

## **Rodando os Testes**

Para executar os testes unitários com **Jest**, use:

```sh
yarn test
```

## **Licença**

Este projeto está sob a licença MIT - veja o arquivo **LICENSE** para mais detalhes.

---

Feito com ❤️ por [Priscila Oliveira](https://github.com/pripoliveira50/)
