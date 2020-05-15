# THE MUG PLUG SHOP

Création d'un exemple de  site e-commerce

DEMARRER LE PROJET

1/télécharger ou cloner le projet</br>
2/entrer dans le dossier du projet en ligne de  commande</br>
3/faire composer install</br>
4/ puis npm install</br>
5/ Configurer la base de données
éditer le fichier .env pour ajouter votre nom de base de données, login et mots de passe mysql. (Exemple: DATABASE_URL=mysql://student:'mot de passe'@127.0.0.1:3306/kikipaye)
6/ Créer la base de données</br>
php bin/console doctrine:database:create</br>
7/ Créer les tables etc...</br>
php bin/console doctrine:migrations:migrate</br>
8/ lancer un serveur local avec php bin/console server:run</br>
9/ puis npm run dev-server</br>

Travail sur le site :

#SYMFONY

-installation de symfony et dépendances avec composer</br>
-creation projet symfony</br>
-mise en place base de donnée symfony</br>
-création base de données</br>
-création des schemas et tables</br>
-ajout de fausses données</br>
-mise en place de Api plateform</br>
-sérialisation des données pour filtrer certaines données</br>
-creation d’une entité User pour la gestion des connexions sur le site</br>
-gestion des filtres de validation d’un formulaire</br>
-gestion d’une session par le biais d’un token</br>
-gestion d’un formulaire de contact avec mail (envoir avec SwiftMailer)</br>

#REACT

-installation webpack Encore</br>
-installation React Js et connexion avec backend Symfony</br>
-mise en place Routing</br>
-création de composants</br>
-utilisation de Bootstrap</br>
-création d’une Navbar</br>
-création page avec liste des produits</br>
-incrémentation du nombre des produits du panier</br>
-création page avec liste des produits dans le panier</br>
-utilisation de rédux avec développements d’actions et combinaisons de réducers</br>
-réadapter code et css sur des composants repris sur internet</br>
-gestion formulaire avec redux et ses outils</br>
-mise en place d’une pagination</br>
-utilisation de hooks pour la gestion des state</br>



