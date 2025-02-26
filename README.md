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
- **React Hook Form**

## Estrutura de Pastas

```bash
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

## Decisões do Projeto

### 🏗 **Estrutura de Pastas**

A organização das pastas foi pensada para garantir **modularidade** e **reutilização de código**, separando componentes reutilizáveis, telas, infraestrutura, tokens globais e utilitários. Além disso, a pasta `test/` foi mantida na raiz do projeto para centralizar a configuração dos testes e evitar arquivos dispersos dentro de `src/`.

- **`components/`**: Armazena componentes reutilizáveis, facilitando a composição da interface.
- **`global/tokens/`**: Guarda tokens de design para padronização visual do app.
- **`infra/`**: Contém configurações e integrações essenciais do projeto.
- **`screens/`**: Estrutura modular para organização das telas do aplicativo.
- **`utils/`**: Funções auxiliares que evitam código duplicado.

Essa estrutura modular melhora a **escalabilidade** e facilita a **manutenção** do código.

### 🚀 **Escolha das Tecnologias**

O projeto utiliza **React Native 76** e **Expo** para um desenvolvimento mais ágil e compatível com múltiplas plataformas, reduzindo a necessidade de configuração nativa complexa.

#### **Principais tecnologias e suas justificativas:**

- **Expo**: Simplifica a configuração, deploy e execução em dispositivos reais.
- **TypeScript**: Melhora a segurança e manutenção do código.
- **Jest + Testing Library**: Garante testes confiáveis e acessíveis.
- **React Query**: Gerencia estado assíncrono, otimizando cache e sincronização de dados.
- **React Hook Form**: Permite formulários mais performáticos e flexíveis.

### ✅ **Configuração de Testes**

Os testes são uma parte essencial do projeto, garantindo que os componentes e funcionalidades funcionem conforme esperado. A escolha de **Jest** e **Testing Library** foi baseada em:

- Facilidade de integração com React Native.
- Simulação de interações reais dos usuários.
- Testes acessíveis e legíveis, usando `getByText` e `fireEvent`.

A pasta `test/` foi mantida na raiz para manter a configuração centralizada.

### 🛠 **Ferramentas e Configurações**

O projeto conta com arquivos de configuração essenciais para um ambiente bem estruturado:

- **`jest.config.ts`**: Ajusta o Jest para compatibilidade com React Native e Expo.
- **`metro.config.js`**: Customiza o Metro Bundler para melhor performance.
- **`tsconfig.json`**: Define regras do TypeScript para melhor tipagem e segurança.

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
