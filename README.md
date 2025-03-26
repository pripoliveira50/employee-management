# 👥 Employee Management

## 📖 Project Overview

**Employee Management** is a mobile application built with **React Native** and **Expo**, designed to streamline employee management within organizations. It provides an intuitive interface to efficiently view, search, and organize employee information.

---

## 🚀 Technologies Used

- **React Native 76**
- **Expo**
- **TypeScript**
- **Jest** (Unit Testing)
- **Testing Library**
- **TanStack Query (React Query)**
- **React Hook Form**

---

## 📂 Folder Structure

```bash
.
├── android/                 # Android project (Expo Managed)
├── ios/                     # iOS project (Expo Managed)
├── src/                     # Main source code
│   ├── components/          # Reusable UI components
│   ├── global/tokens/       # Global design tokens and styles
│   ├── infra/               # Project infrastructure and integrations
│   ├── screens/             # Application screens
│   └── utils/               # Utility functions
├── test/                    # Test configurations
├── jest.config.ts           # Jest configuration
├── tsconfig.json            # TypeScript configuration
├── metro.config.js          # Metro bundler configuration
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

---

## 🛠 Project Decisions

### 🏗 Folder Structure

The project’s folder structure emphasizes **modularity**, **reusability**, and clear separation of concerns:

- **`components/`**: Contains reusable UI components.
- **`global/tokens/`**: Stores global design tokens to ensure visual consistency.
- **`infra/`**: Includes core infrastructure and integration settings.
- **`screens/`**: Organizes application screens in a modular way.
- **`utils/`**: Houses helper functions to prevent code duplication.

This modular structure enhances **scalability** and simplifies **maintenance**.

### ⚙️ Technology Choices

The project leverages **React Native 76** and **Expo** for fast, cross-platform development, reducing complexity in native configurations.

**Core technologies rationale:**

- **Expo**: Simplifies setup, deployment, and testing on devices.
- **TypeScript**: Enhances code safety and maintainability.
- **Jest + Testing Library**: Provides reliable, user-centric unit testing.
- **React Query**: Efficiently manages async states, caching, and data synchronization.
- **React Hook Form**: Offers performant and flexible form handling.

### ✅ Testing Setup

Testing is central to ensuring app reliability and functionality. The combination of **Jest** and **Testing Library** is chosen for:

- Seamless integration with React Native.
- Realistic user interaction simulations.
- Readable and maintainable test cases using `getByText` and `fireEvent`.

The `test/` directory is intentionally centralized to keep testing configurations organized.

### 🔧 Tools and Configurations

Essential configuration files included in the project:

- **`jest.config.ts`**: Optimizes Jest for React Native and Expo.
- **`metro.config.js`**: Enhances Metro bundler performance.
- **`tsconfig.json`**: Defines TypeScript rules for type safety and consistency.

---

## 📋 Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (recommended: v18+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/):

```sh
npm install -g expo-cli
```

- [Yarn](https://yarnpkg.com/) (optional, recommended)

---

## 🚦 Getting Started

1. **Clone the repository:**

```sh
git clone https://github.com/pripoliveira50/employee-management.git
cd employee-management
```

2. **Install dependencies:**

```sh
yarn install
```

3. **Start Expo:**

```sh
yarn start
```

4. **Run on Emulator or Device:**

- **Android:**

```sh
yarn android
```

- **iOS (macOS only):**

```sh
yarn ios
```

---

## ✅ Running Tests

Execute unit tests using **Jest**:

```sh
yarn test
```

---

## 🎨 Interface Preview

<p align="center">
  <img src="/.github/assets/app.gif" width="320" alt="App Preview"/>
</p>

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Priscila Oliveira](https://github.com/pripoliveira50/)

