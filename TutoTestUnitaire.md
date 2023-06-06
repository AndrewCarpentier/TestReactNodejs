# Tuto Test Unitaires

## Sommaire
1. Pourquoi faire des tests unitaires ?
2. Configuration de l'environnement de test
3. Création de fichiers de test
4. Écriture des tests unitaires
5. Exécution des tests

## Pourquoi faire des tests unitaires ?

Les tests unitaires sont essentiels dans le processus de développement logiciel pour plusieurs raisons :

1. **Détection précoce des erreurs** : Les tests unitaires permettent de détecter les erreurs et les bugs dès les premières étapes du développement, ce qui facilite leur correction et réduit les coûts associés.

2. **Validation du comportement attendu** : Les tests servent à vérifier que chaque unité de code fonctionne conformément à ses spécifications et produit les résultats attendus. Ils permettent également de valider le comportement de chaque fonction, méthode ou classe de manière isolée, sans dépendre du reste de l'application.

3. **Facilitation de la maintenance** : Les tests unitaires facilitent la maintenance et les modifications du code. Lorsqu'une modification est effectuée, on peut exécuter les tests correspondants pour s'assurer qu'il n'y a pas de régressions ou de comportements indésirables qui se produisent.

4. **Documentation du code** : Les tests unitaires agissent également comme une forme de documentation du code. En examinant les tests, les développeurs peuvent comprendre rapidement comment utiliser ou interagir avec une unité de code donnée.

5. **Encouragement de la conception modulaire** : Les tests unitaires favorisent une conception modulaire, où chaque unité est testée de manière indépendante. Cela facilite la réutilisation du code, la refactorisation du code et rend le code plus maintenable et évolutif.

6. **Confiance dans les modifications** : Lorsqu'on apporte des modifications au code, on peut exécuter les tests unitaires pour s'assurer que les fonctionnalités existantes ne sont pas affectées. Cela donne la confiance pour effectuer des modifications en toute sécurité, sachant que les tests vous alerteront en cas de problème.

En résumé, les tests unitaires contribuent à améliorer la qualité du code, à réduire les erreurs et les régressions, à faciliter la maintenance et à renforcer la confiance dans les fonctionnalités de l'application. Ils font partie intégrante des bonnes pratiques de développement logiciel et aident les équipes à produire du code plus fiable et robuste.

## Configuration de l'environnement de test

Avant de commencer à écrire des tests unitaires pour votre application, vous devez configurer votre environnement de test. Voici les étapes à suivre :

1. **Installer Jest** : Jest est un framework de test populaire pour JavaScript. Il offre une syntaxe simple et de nombreuses fonctionnalités utiles pour les tests. Vous pouvez l'installer en utilisant la commande suivante dans votre terminal :

```bash
npm install --save-dev jest
```

2. **Installer React Testing Library** : React Testing Library est une bibliothèque recommandée pour les tests de composants React. Elle fournit des outils pour simuler le rendu des composants et interagir avec eux lors des tests. Vous pouvez l'installer en utilisant la commande suivante :

```bash
npm install --save-dev @testing-library/react


```

Une fois ces étapes terminées, vous êtes prêt à écrire des tests unitaires pour vos composants React.

## Création de fichiers de test

Pour chaque composant que vous souhaitez tester, vous pouvez créer un fichier de test séparé avec l'extension `.test.js` ou `.spec.js`. Voici un exemple de structure de fichiers de test :

```
- src/
  - components/
    - MyComponent.js
    - MyComponent.test.js
```

Dans le fichier de test `MyComponent.test.js`, vous pouvez écrire vos tests unitaires pour le composant `MyComponent`.

## Écriture des tests unitaires

Dans vos fichiers de test, vous pouvez utiliser les fonctionnalités de Jest et React Testing Library pour écrire des tests unitaires pour vos composants React.

Voici un exemple simple de comment structurer un test unitaire pour un composant React :

```javascript
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  test('My first test', () => {
    // 1. Génération
    // Here, you can generate the necessary data or objects for your test.
    // For example, you can create an instance of MyComponent or initialize variables.

    // 2. Actions

    // Perform the actions or operations that you want to test.
    // This can include method calls, interaction with components, etc.

    // 3. Assertions

    // Make assertions to verify that the behavior of the tested code is as expected.
    // You can use the assertion functions provided by Jest to check the results.
  });

  //'it' is an alias of 'test' you can use either.
  it('My second test', () => {
    // 1. Génération
    // Here, you can generate the necessary data or objects for your test.
    // For example, you can create an instance of MyComponent or initialize variables.

    // 2. Actions

    // Perform the actions or operations that you want to test.
    // This can include method calls, interaction with components, etc.

    // 3. Assertions

    // Make assertions to verify that the behavior of the tested code is as expected.
    // You can use the assertion functions provided by Jest to check the results.
  });
});
```
Le code utilise la fonction 'describe' pour regrouper un ensemble de tests liés à un composant spécifique (dans cet exemple, 'MyComponent'). À l'intérieur de 'describe', vous définissez des tests individuels à l'aide de la fonction 'test' (ou 'it').
1.	Génération : Cette étape consiste à créer les données ou les objets nécessaires pour le test. Par exemple, si vous testez un composant, vous pouvez créer une instance de ce composant.

2.	Actions : Cette étape effectue les actions ou les opérations que vous souhaitez tester. Cela peut inclure l'appel de méthodes, l'interaction avec des composants ou toute autre action que vous voulez tester.

3.	Assertions : Cette étape comprend les assertions pour vérifier que le comportement du code testé est conforme à vos attentes. Vous utilisez les fonctions d'assertion fournies par Jest pour vérifier les résultats. Par exemple, vous pouvez utiliser expect pour vérifier si une valeur est égale à une autre valeur attendue.

Vous pouvez répéter ces étapes pour chaque test que vous souhaitez exécuter. Chaque test doit être indépendant et se concentrer sur un aspect spécifique du code que vous voulez tester.

Exemple: 

```javascript
describe('MyComponent', () => {
  test('should return the sum of two numbers', () => {
    // 1. Génération
    const num1 = 5;
    const num2 = 10;

    // 2. Actions
    const sum = num1 + num2;

    // 3. Assertions
    expect(sum).toBe(15);
  });
});

```
Dans cet exemple, nous testons une fonction hypothétique qui additionne deux nombres. Voici comment les étapes sont implémentées :

1.	Génération : Nous générons les données nécessaires pour notre test, à savoir ‘num1’ et ‘num2’, qui sont définis respectivement à 5 et 10.

2.	Actions : Nous effectuons l'action que nous voulons tester, dans ce cas, nous additionnons ‘num1’ et ‘num2’ et stockons le résultat dans ‘sum’.

3.	Assertions : Nous utilisons la fonction d'assertion ‘expect’ pour vérifier si ‘sum’ est égal à 15, ce qui est le résultat attendu de l'addition de 5 et 10. Si l'assertion échoue, le test échouera.

## Exécution des tests

Pour exécuter vos tests, vous pouvez utiliser la commande `npm test` dans votre terminal. Jest exécutera tous les fichiers de test se trouvant dans votre projet et affichera les résultats dans la console.

```bash
npm test
```

Les résultats des tests s'afficheront avec des informations sur les tests réussis, échoués ou en cours d'exécution.

En conclusion, les tests unitaires sont essentiels pour garantir la qualité, la fiabilité et la maintenabilité de votre code. En utilisant des outils comme Jest et React Testing Library, vous pouvez écrire des tests unitaires efficaces pour vos composants React.