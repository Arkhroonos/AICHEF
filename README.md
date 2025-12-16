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
- [Utilisation](#-utilisation)
- [Développement](#-développement)
- [Build](#-build)
- [API Documentation](#-api-documentation)
- [Dépannage](#-dépannage)
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

## 💡 Utilisation

### Comment utiliser AICHEF ?

1. **Accédez à l'application** : Ouvrez votre navigateur sur http://localhost:4200

2. **Ajoutez vos ingrédients** :
   - Cliquez sur le champ "Ingredient" pour saisir un ingrédient
   - L'autocomplétion vous suggère des ingrédients courants
   - Ajoutez la quantité dans le champ "Quantity"
   - Cliquez sur le bouton `+` pour ajouter d'autres ingrédients
   - Utilisez le bouton `-` pour supprimer un ingrédient

3. **Générez des recettes** :
   - Une fois vos ingrédients saisis, cliquez sur le bouton de soumission
   - L'IA va analyser vos ingrédients et générer plusieurs recettes

4. **Consultez les résultats** :
   - Chaque recette affiche :
     - Le nom de la recette
     - La liste des ingrédients nécessaires
     - Les instructions étape par étape
     - Le temps de préparation et de cuisson
     - Le nombre de portions
     - Les bénéfices nutritionnels
     - Des notes et astuces
     - Des variations possibles

### Exemple d'utilisation

```
Ingrédients entrés :
- Poulet : 500g
- Tomates : 3
- Oignons : 2
- Ail : 3 gousses

Résultat : L'IA génère plusieurs recettes comme "Poulet basquaise", 
"Poulet rôti aux tomates", "Tajine de poulet", etc.
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

## 🌐 API Documentation

### Endpoints

#### GET `/api/recipes`

Génère des recettes basées sur les ingrédients fournis.

**Paramètres de requête** :
- `ingredients` (string, requis) : Liste des ingrédients séparés par des virgules

**Exemple de requête** :
```bash
curl "http://localhost:3000/api/recipes?ingredients=poulet,tomates,oignons"
```

**Exemple de réponse** :
```json
{
  "recipes": {
    "recipes": [
      {
        "name": "Poulet basquaise",
        "ingredients": ["500g de poulet", "3 tomates", "2 oignons"],
        "instructions": ["Étape 1...", "Étape 2..."],
        "servings": 4,
        "prep_time": 15,
        "cook_time": 30,
        "total_time": 45,
        "benefits": ["Riche en protéines", "Source de vitamine C"],
        "variation": true,
        "notes": ["Astuce 1...", "Astuce 2..."]
      }
    ]
  }
}
```

## 🐛 Dépannage

### Problèmes courants

**Erreur "Mistral API key not found"** :
- Vérifiez que votre fichier `.env` est bien configuré dans `apps/aichef-api/`
- Assurez-vous que la variable `MISTRAL_API_KEY` est correctement définie
- Redémarrez le serveur backend après avoir ajouté la clé

**Le frontend ne communique pas avec le backend** :
- Vérifiez que les deux serveurs sont démarrés
- Consultez le fichier `proxy.conf.json` pour la configuration du proxy
- Vérifiez les CORS si vous avez modifié la configuration

**Erreur lors de l'installation des dépendances** :
```bash
# Nettoyez le cache npm et réinstallez
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**Les tests échouent** :
```bash
# Nettoyez le cache Nx et Jest
npx nx reset
npm run test -- --clearCache
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
│   │   │   │   │   ├── ingredients-form.component.ts
│   │   │   │   │   ├── ingredients-form.component.html
│   │   │   │   │   └── ingredients-form.component.scss
│   │   │   │   ├── recipes-display/    # Affichage des recettes
│   │   │   │   │   ├── recipes-display.component.ts
│   │   │   │   │   ├── recipes-display.component.html
│   │   │   │   │   └── recipes-display.component.scss
│   │   │   │   ├── services/            # Services Angular
│   │   │   │   │   └── recipes.service.ts
│   │   │   │   └── models/              # Modèles TypeScript
│   │   │   │       └── recipes.ts
│   │   │   ├── theme/                   # Thème Material personnalisé
│   │   │   └── index.html
│   │   └── project.json
│   │
│   └── aichef-api/                # API NestJS
│       ├── src/
│       │   ├── app/
│       │   │   ├── recipes/             # Module recettes
│       │   │   │   ├── recipes.controller.ts
│       │   │   │   ├── recipes.service.ts
│       │   │   │   └── recipes.module.ts
│       │   │   └── shared/              # Services partagés (LLM)
│       │   │       ├── llm.service.ts
│       │   │       └── shared.module.ts
│       │   └── main.ts
│       └── project.json
│
├── nx.json                        # Configuration Nx
├── package.json                   # Dépendances
├── tsconfig.base.json             # Config TypeScript globale
└── README.md                      # Ce fichier
```

### Composants clés

#### `RecipesDisplayComponent`

Le composant `recipes-display` est responsable de l'affichage des recettes générées par l'IA. Il utilise les fonctionnalités modernes d'Angular :

- **Signals** : Pour la gestion réactive de l'état
- **HTTP Resources** : Pour la gestion automatique du chargement des données
- **Computed Signals** : Pour transformer les données de l'API en format utilisable
- **Template Control Flow** : Avec la syntaxe `@if` et `@for` d'Angular 17+

**Fonctionnalités** :
- Parsing intelligent du JSON retourné par Mistral AI
- Gestion des états de chargement, erreur et succès
- Affichage responsive avec grille CSS
- Animation de chargement avec Lottie
- Support des images et vidéos (si fournies)
- Mise en évidence des bénéfices nutritionnels et variations

#### `IngredientsFormComponent`

Formulaire réactif avec :
- FormArray dynamique pour ajouter/supprimer des ingrédients
- Autocomplétion des ingrédients
- Validation des entrées
- Navigation vers la page de résultats

#### `RecipesService`

Service de gestion des recettes utilisant :
- `httpResource` pour les requêtes HTTP réactives
- Signals pour la communication entre composants
- Gestion automatique du cache et du rechargement

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

### Comment contribuer ?

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 🗺️ Roadmap

- [ ] Ajout d'un système de favoris pour sauvegarder les recettes
- [ ] Génération d'images de recettes avec IA
- [ ] Filtres par régime alimentaire (végétarien, vegan, sans gluten, etc.)
- [ ] Historique des recherches
- [ ] Export de recettes en PDF
- [ ] Mode hors ligne avec cache local
- [ ] Suggestions basées sur les saisons
- [ ] Intégration avec des APIs de nutrition
- [ ] Support multilingue

## 📊 Performance

- **Temps de réponse API** : ~2-5 secondes (dépend de Mistral AI)
- **Build frontend** : ~30 secondes
- **Build backend** : ~10 secondes
- **Bundle size frontend** : Optimisé avec Angular build

## 🔒 Sécurité

- Les clés API sont stockées dans des variables d'environnement
- Validation des entrées utilisateur
- Sanitization des réponses de l'IA
- CORS configuré pour la communication frontend-backend

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

