# PROJET EXPRESS NODE.JS

Le projet correspondant aux cours du 13 et 14 février 2020. 

## PARTIE 1 - NPM
- Créer un package json
- Faire un script qui affiche « Hello World » en tappant :  $ npm run greetings
- Faire un script dans un fichier distinct qui affiche des trucs :  $ npm run whatever
- Installer Express.js et le lancer
- Bloquer Express à une version spécifique

## PARTIE 2 - EXPRESS
- Lancer le générateur Express avec comme vue EJS
- Vérifier que la vue s’affiche bien
- Rajouter une vue avec une liste d’éléments passés par le controller
- Lire un paramètre de query, et l’afficher dans la vue
- Faire un middleware qui log les query params
- Lancer une erreur si le paramètre est invalide, depuis le middleware et le controller
- Faire un error handler générique pour afficher dans ce cas une page html jolie en cas de 500
- Gerer le cas de 404 avec une page HTML dédiée.

## PARTIE 3 - FORMULAIRE
- Créer une nouvelle page avec un formulaire qui demande deux nombres, sur `/calcul`
- Créer la page de réponse au formulaire (page html) qui additionne les deux nombres
- Créer un fichier « CalculatorService » et une fonction calculate qui renvoie une promesse
- Afficher une page qui affiche le résultat renvoyé par le service
- Si la réponse est impaire throw une erreur dans le service
- Récupérer cette erreur dans un errorHandler du calculRouter et afficher un message « Désolé le résultat est impair »

## PARTIE 4 - PERSISTANCE AVEC SEQUELIZE
- Initialiser Sequelize avec la CLI de Sequelize sur Postgres
- Créer une table « Dog » qui a un nom et un age :Créer un model pour le Chien, une migration et des données de Seed
- Créer un repository pour lire tous les chiens, et puis le Controller pour les lister tous, sur `/dogs`
- Créer une page pour afficher un chien, sur `/dogs/:id`
- Créer un formulaire qui créé un chien, sur `/dogs/new`
    - vérifiant qu’il a bien un nom et un age > 0
    - Le sauve en base de donnée
    - Redirige vers la page « show » du chien
- Réutiliser ce formulaire pour mettre à jour ce chien, mais seulement l’age, qui ne peut qu’augmenter, sur `/dogs/:id/edit`


