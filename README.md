# 🍳 AICHEF

**AICHEF** est une application intelligente qui génère des recettes personnalisées à partir des ingrédients que vous avez sous la main. Powered by AI (Mistral AI via LangChain), l'application vous propose des recettes créatives et détaillées en quelques secondes.

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## 📋 Table des matières

- [Fonctionnalités](#-fonctionnalités)
- [Architecture](#-architecture)
- [Technologies](#-technologies)
- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Démarrage](#-démarrage)
- [Développement](#-développement)
- [Build](#-build)
- [Tests](#-tests)
- [Structure du projet](#-structure-du-projet)

## ✨ Fonctionnalités

- 🥗 **Génération de recettes IA** : Saisissez vos ingrédients et obtenez des suggestions de recettes
- 📝 **Formulaire dynamique** : Ajoutez plusieurs ingrédients avec leurs quantités
- 🎨 **Interface moderne** : UI élégante avec Angular Material
- ⚡ **Temps réel** : Suggestions instantanées via API REST
- 📊 **Détails complets** : Recevez les instructions, temps de préparation, bénéfices nutritionnels, etc.
- 🔄 **Variations** : Découvrez des variations possibles pour chaque recette

## 🏗️ Architecture

Ce projet est un **monorepo Nx** contenant deux applications :

```
┌─────────────────┐         ┌──────────────────┐
│   AICHEF UI     │────────▶│  AICHEF API      │
│   (Angular 20)  │         │  (NestJS)        │
└─────────────────┘         └──────────────────┘
                                     │
                                     ▼
                            ┌──────────────────┐
                            │   Mistral AI     │
                            │   (LangChain)    │
                            └──────────────────┘
```

- **Frontend** : Application Angular standalone avec Material Design
- **Backend** : API NestJS avec intégration LangChain
- **IA** : Modèle Mistral AI Large pour la génération de recettes

## 🛠️ Technologies

### Frontend (`apps/aichef`)
- **Angular 20.1** - Framework JavaScript moderne
- **Angular Material 20.1** - Composants UI
- **RxJS 7.8** - Programmation réactive
- **TypeScript** - Typage statique
- **SCSS** - Styles avancés

### Backend (`apps/aichef-api`)
- **NestJS 11** - Framework Node.js progressif
- **LangChain 0.3** - Framework d'orchestration IA
- **Mistral AI** - Modèle de langage
- **Redis 5.8** - Cache et gestion de sessions
- **Express** - Serveur HTTP

### Infrastructure
- **Nx 21.3.11** - Build system et monorepo tools
- **Jest** - Tests unitaires
- **ESLint** - Linting
- **Webpack** - Bundling

## 📦 Prérequis

- **Node.js** >= 18.x
- **npm** >= 9.x
- **Redis** (optionnel, pour la mise en cache)
- **Clé API Mistral AI** (obligatoire)

## 🚀 Installation

1. **Cloner le repository**
```bash
git clone <repository-url>
cd AICHEF
```

2. **Installer les dépendances**
```bash
npm install
```

## ⚙️ Configuration

### Configuration de l'API Mistral AI

Créez un fichier `.env` à la racine du projet `apps/aichef-api` :

```bash
MISTRAL_API_KEY=your_mistral_api_key_here
```

Pour obtenir une clé API :
1. Créez un compte sur [Mistral AI](https://console.mistral.ai/)
2. Générez une clé API dans votre dashboard
3. Copiez la clé dans votre fichier `.env`

### Configuration du proxy (optionnel)

Le frontend utilise un proxy pour communiquer avec le backend. La configuration se trouve dans `apps/aichef/proxy.conf.json`.

## 🎯 Démarrage

### Démarrage rapide (dev)

Lancez les deux applications simultanément :

```bash
# Terminal 1 - Backend
npx nx serve aichef-api

# Terminal 2 - Frontend
npx nx serve aichef
```

L'application sera accessible sur :
- **Frontend** : http://localhost:4200
- **Backend** : http://localhost:3000

### Démarrage individuel

**Frontend uniquement** :
```bash
npx nx serve aichef
```

**Backend uniquement** :
```bash
npx nx serve aichef-api
```

## 👨‍💻 Développement

### Commandes utiles

**Visualiser le graphe de dépendances** :
```bash
npx nx graph
```

**Lancer les tests** :
```bash
# Tests du frontend
npx nx test aichef

# Tests du backend
npx nx test aichef-api

# Tous les tests
npx nx run-many --target=test
```

**Linter** :
```bash
# Lint du frontend
npx nx lint aichef

# Lint du backend
npx nx lint aichef-api

# Tout linter
npx nx run-many --target=lint
```

**Voir les détails d'un projet** :
```bash
npx nx show project aichef
npx nx show project aichef-api
```

## 📦 Build

### Build de production

**Frontend** :
```bash
npx nx build aichef --configuration=production
```
Les fichiers de build seront dans `dist/apps/aichef/`

**Backend** :
```bash
npx nx build aichef-api --node-env=production
```
Les fichiers de build seront dans `dist/apps/aichef-api/`

**Build complet** :
```bash
npx nx run-many --target=build --configuration=production
```

## 🧪 Tests

```bash
# Tests unitaires
npx nx test aichef
npx nx test aichef-api

# Tests avec couverture
npx nx test aichef --coverage
npx nx test aichef-api --coverage

# Tests e2e (si configurés)
npx nx e2e aichef-e2e
```

## 📁 Structure du projet

```
AICHEF/
├── apps/
│   ├── aichef/                    # Application Angular
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── ingredients-form/    # Formulaire d'ingrédients
│   │   │   │   ├── recipes-display/    # Affichage des recettes
│   │   │   │   ├── services/            # Services Angular
│   │   │   │   └── models/              # Modèles TypeScript
│   │   │   ├── theme/                   # Thème Material personnalisé
│   │   │   └── index.html
│   │   └── project.json
│   │
│   └── aichef-api/                # API NestJS
│       ├── src/
│       │   ├── app/
│       │   │   ├── recipes/             # Module recettes
│       │   │   └── shared/              # Services partagés (LLM)
│       │   └── main.ts
│       └── project.json
│
├── nx.json                        # Configuration Nx
├── package.json                   # Dépendances
├── tsconfig.base.json             # Config TypeScript globale
└── README.md                      # Ce fichier
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📝 License

MIT

## 🔗 Ressources

- [Documentation Nx](https://nx.dev)
- [Documentation Angular](https://angular.dev)
- [Documentation NestJS](https://nestjs.com)
- [Documentation LangChain](https://js.langchain.com)
- [Documentation Mistral AI](https://docs.mistral.ai)

---

**Made with ❤️ and AI**

```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
