# Le Challenge Front-End Novatize

Bienvenue dans ton coding challenge Novatize! Tu trouveras ci-bas tout ce que tu dois savoir pour pouvoir réaliser le challenge.

Ce repo contient une interface web assez simple composée de 3 fichiers. Tu auras à modifier ces 3 fichiers au cours du challenge.

- index.html
- src/styles.css
- src/app.js

Un de nos collègues chez Novatize a bien avancé le travail, mais il manque encore du travail à faire. Et c'est là qu'on demande ton aide.

En partant du code de ce repo, ton challenge est d'y ajouter ce qui est décrit plus bas dans la section [Tâches à compléter](#tâches-à-compléter)

---

## :hand: Avant de commencer

Tu as deux options d'environnement de développement:

* CodeSandbox, un environnement déjà tout prêt.
* Environnement local sur ta machine. Utilise cette façon de faire si tu préfères développer avec tes outils habituels. Tu peux suivre les étapes ci-dessous pour installer le nécessaire.

### Codesanbox

[Cliques ici](https://codesandbox.io/s/novatize-front-end-challenge-fh3j2) pour accéder le CodeSandbox

Un environnement en ligne qui contient exactement le même code que le repo Github. Si tu rencontre des problèmes avec l'environnement local, celui-là ne demande aucune préparation afin d'être up and running.

Dès que tu modifies quelque chose dans CodeSandbox, une copie est créée que tu pourras nous envoyer par la suite en utilisant la fonction _Share_.

### Environnement local

Tu peux aussi utiliser le repo lui-même pour développer localement sur ta machine. Ça peut demander un peu de préparation, mais ça te permet aussi d'utiliser tous tes outils habituels. Si tu choisis d'utiliser CodeSandbox, passes directement à la section Maquettes Finales.

#### Outils

Voir les outils que tu dois avoir sur ta machine afin de pouvoir compléter le challenge.

- npm version 7.x et node version 16.x (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Chrome (d'autres browsers devraient fonctionner, mais ici on l'a testé sur Chrome seulement)
- Git CLI (https://github.com/git-guides/install-git)
- Un compte GitHub

#### Cloner le repo

Tu devras ensuite cloner ce repo sur ta machine.

`git clone https://github.com/Novatize/frontend-challenge.git` ou dans GitHub cliques sur Code et ensuite Download Zip.

On recommande ensuite de te créer un repo public sur ton propre compte GitHub et d'y mettre l'ensemble des fichiers que tu viens de télécharger. Tu pourras ensuite nous envoyer le lien vers ton repo quand tu auras terminé ton challenge pour nous partager ton travail.

C'est aussi possible de nous envoyer ton code par courriel dans un .zip, mais c'est moins pratique. On veut voir ce que tu sais faire avec Git!

#### Démarrer l'interface localement

Finalement, ouvre-toi un terminal dans le dossier où tu as placé le repo et exécute les commandes suivantes.

`npm install`

`npm run start`

Ton terminal devrait montrer à la dernière ligne quelque chose de similaire à `Server running at http://localhost:1234`. Ouvre ton browser à cette adresse et tu verras l'interface du challenge. Tant que le terminal reste ouvert, elle se mettra à jour automatiquement pour refléter les changements que tu fais au code.

---

## :framed_picture: Maquettes finales

[Vue desktop (plus grand que 950px)](https://github.com/Novatize/frontend-challenge/blob/master/mockups/desktop.png?raw=true)

[Vue tablette (entre 770px et 950px)](https://github.com/Novatize/frontend-challenge/blob/master/mockups/tablet.png?raw=true)

[Vue mobile (plus petit que 770px)](https://github.com/Novatize/frontend-challenge/blob/master/mockups/mobile.png?raw=true)

[Validation des champs](https://github.com/Novatize/frontend-challenge/blob/master/mockups/validation.png?raw=true)

[Modale de succès](https://github.com/Novatize/frontend-challenge/blob/master/mockups/success_modal.png?raw=true)

[Modale d'erreur](https://github.com/Novatize/frontend-challenge/blob/master/mockups/error_modal.png?raw=true)

---

## :white_check_mark: Tâches à compléter

L'interface web de ce repo est un travail qui est encore en cours par un de nos développeurs chez Novatize. Elle est fonctionnelle en plusieurs points, mais il manque encore du travail avant qu'elle réponde aux demandes du client.

Tu verras ci-dessous qu'il manque: 1 bug à réparer, quelques features à ajouter et à rendre l'interface responsive sur mobile. Ce n'est pas nécessaire de tout réaliser ces tâches, on veut surtout voir de quoi tu es capable. Certaines tâches sont plus difficiles que d'autres, à toi de voir ce que tu peux faire et comment tu priorises le tout.

### :bug: Bug à réparer

Si un champ a été évalué en erreur et est ensuite évalué valide, le contour rouge et l'icône d'erreur restent visibles.

Pour reproduire:

- Rempli le champ _First name_
- Clique sur _Submit_
- Le champ _First name_ est maintenant encadré en vert
- Efface le texte du champ _First name_
- Clique sur _Submit_ une seconde fois
- L'icône d'erreur est toujours visible et le champs _Last name_ demeure rouge

On voudrait qu'après avoir cliqué sur _Submit_ une seconde fois, seul le champ _First name_ soit rouge. Exactement comme la première fois où tu cliques sur Submit.

### :star: Features manquantes

**:white_circle: Ajouter des placeholders dans les champs**

Tous les champs (à l'exception de ceux pour le mot de passe) devraient avoir une valeur placeholder.

**:white_circle: Cacher le texte dans les champs Password**

Les champs de password ne devraient pas montrer ce qui y est écrit; comme tout bon champ de mot de passe.

**:white_circle: Ajouter un champ courriel et vérifier son contenu**

Au-dessus des champs _Password_ et _Confirm password_, ajoute des champs _Email_ et _Confirm email_. Au moment de cliquer sur le bouton _Submit_, l'interface doit vérifier que le email respecte un format valide et que les deux champs contiennent le même courriel. Sans quoi, une erreur doit être affichée sur l'input, de la même manière que les autres inputs existants.

**:white_circle: Vérifier la qualité du password**

On vérifie déjà que les valeurs des champs _Password_ et _Confirm password_ sont identiques. Par contre, on veut aussi vérifier que le mot de passe entré dans l'input respecte les règles suivantes:

- Au moins 8 caractères
- Au moins une lettre minuscule
- Au moins une lettre majuscule
- Au moins un chiffre

**:white_circle: Améliorer la liste de races de chien**

La liste est déjà remplie par l'appel à un API de Novatize qui retourne une liste de races de chien.

On veut maintenant la peaufiner en l'ordonnant alphabétiquement et en sélectionnant une race par défaut. À toi de choisir laquelle devrait être choisie!

Voir [Obtenir une liste de races de chien](#obtenir-une-liste-de-races-de-chien) pour la documentation de l'API.

**:white_circle: Styler la modale de succès**

Au moment de cliquer sur _Submit_, si tous les champs sont valides, une modale est déjà affichée. Par contre, le style de celle-ci devrait ressembler aux maquettes. Ce qui n'est pas le cas pour l'instant.

**:white_circle: Appeler un API pour créer le profile**

Au moment de cliquer sur _Submit_, si tous les champs sont valides, l'interface devrait appeler l'API de Novatize pour créer le profile.

Les champs existants du formulaire ont déjà les bons noms pour correspondre avec ce qui est attendu par l'API. À toi d'ajouter le bon nom pour les champs de password, transformer le formulaire en JSON et l'envoyer à l'API.

Voir [Vérifier le formulaire et créer un profile](#vérifier-le-formulaire-et-créer-un-profil) pour la documentation de l'API.

**:white_circle: Afficher une modale en cas d'erreur sur l'API**

Faisant suite à la feature d'appel de l'API pour créer le profile, si l'API retourne une erreur, tu dois afficher une modale d'erreur et y afficher le message retourné par l'API.

Pour tester plus facilement, entres `j.doe@novatize.com` comme courriel. L'API te retournera une erreur à tout coup.

Voir [Vérifier le formulaire et créer un profile](#vérifier-le-formulaire-et-créer-un-profil) pour la documentation de l'API.

#### :star: Layout Tablette

Lorsque le width est plus petit que 950px, l'interface devrait réagir comme suit:

- Seulement 4 photos doivent s'afficher dans un format 2x2.
- (Optionnel) Les margins et paddings peuvent être ajustés pour diminuer les espaces vides.

#### :star: Layout Mobile

Lorsque le width est plus petit que 770px, l'interface devrait réagir comme suit:

- Tous les champs doivent être l'un par-dessus l'autre.
- Les photos sont cachées.

---

## :gear: Documentation API

### Obtenir une liste de races de chien

**Requête:**

API endpoint: GET https://api.devnovatize.com/frontend-challenge

**Réponse:**

Status code: 200

Body:

```
[
    "Affenpinscher",
    "Airdale Terrier",
    "Akita Inu",
    "Basenji",
    "Basset hound",
    "Beagle",
    "Beauceron",
    "German shepherd",
    "Australian Shepherd",
    "Australian Shepherd miniature",
    "Bichon Frise",
    "Maltese",
    ...
]
```

**Commande curl pour l'essayer facilement**

`curl --location --request GET 'https://api.devnovatize.com/frontend-challenge'`

### Vérifier le formulaire et créer un profil

**Requête:**

API endpoint: POST https://api.devnovatize.com/frontend-challenge

Headers: `Content-Type: application/json`

Body:

```
{
    "first-name": "Jane",
    "last-name": "Doe",
    "doggo-name": "Cobalt",
    "doggo-breed": "Libernese",
    "email": "j.doe@novatize.com",
    "confirm-email": "j.doe@novatize.com",
    "password": "password12A",
    "confirm-password": "password12A"
}
```

**Réponse:**

_Si le formulaire est accepté_

_Le profile n'est pas réellement créé et rien n'est sauvegardé, tu peux t'en servir autant que tu veux._

Status code: 201

Body: vide

_S'il y a une erreur dans la requête_

Status code: 400

Body:

```
{
    "error": "Error message."
}
```

**Commande curl pour l'essayer facilement**

`curl --location --request POST 'https://api.devnovatize.com/frontend-challenge'
--header 'Content-Type: application/json'
--data-raw '{
    "first-name": "Jane",
    "last-name": "Doe",
    "doggo-name": "Cobalt",
    "doggo-breed": "Libernese",
    "email": "example@domain.com",
    "confirm-email": "example@domain.com",
    "password": "password12A",
    "confirm-password": "password12A"
}'`# frontend-challenge-master
