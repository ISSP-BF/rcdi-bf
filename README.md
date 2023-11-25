

Curious why I decided to create CoreUI? Please read this article: [Jack of all trades, master of none. Why Bootstrap Admin Templates suck.](https://medium.com/@lukaszholeczek/jack-of-all-trades-master-of-none-5ea53ef8a1f#.7eqx1bcd8)

CoreUI offers 6 versions: [Bootstrap](https://github.com/coreui/coreui-free-bootstrap-admin-template), [Angular](https://github.com/coreui/coreui-free-angular-admin-template), [Laravel](https://github.com/coreui/coreui-free-laravel-admin-template), [React.js](https://github.com/coreui/coreui-free-react-admin-template), [Vue.js](https://github.com/coreui/coreui-free-vue-admin-template), and [Vue.js + Laravel](https://github.com/coreui/coreui-free-vue-laravel-admin-template).

CoreUI is meant to be the UX game changer. Pure & transparent code is devoid of redundant components, so the app is light enough to offer ultimate user experience. This means mobile devices also, where the navigation is just as easy and intuitive as on a desktop or laptop. The CoreUI Layout API lets you customize your project for almost any device – be it Mobile, Web or WebApp – CoreUI covers them all!

## Table of Contents

* [Versions](#versions)
* [CoreUI Pro](#coreui-pro)
* [Admin Templates built on top of CoreUI Pro](#admin-templates-built-on-top-of-coreui-pro)
* [Installation](#installation)
* [Usage](#Usage)
* [Features](#Features)
* [Creators](#creators)
* [Community](#community)
* [Community Projects](#community-projects)
* [License](#license)
* [Support CoreUI Development](#support-coreui-development)

## Versions

CoreUI is built on top of Bootstrap 4 and supports popular frameworks.

* [CoreUI Free Bootstrap Admin Template](https://github.com/coreui/coreui-free-bootstrap-admin-template)
* [CoreUI Free Angular Admin Template](https://github.com/coreui/coreui-free-angular-admin-template)
* [CoreUI Free Laravel Admin Template](https://github.com/coreui/coreui-free-laravel-admin-template)
* [CoreUI Free React.js Admin Template](https://github.com/coreui/coreui-free-react-admin-template)
* [CoreUI Free Vue.js Admin Template](https://github.com/coreui/coreui-free-vue-admin-template)
* [CoreUI Free Vue.js + Laravel Admin Template](https://github.com/coreui/coreui-free-vue-laravel-admin-template)

## CoreUI Pro

* 💪  [CoreUI Pro Bootstrap Admin Template](https://coreui.io/pro/)
* 💪  [CoreUI Pro Angular Admin Template](https://coreui.io/pro/angular)
* 💪  [CoreUI Pro Laravel Admin Template](https://coreui.io/pro/laravel)
* 💪  [CoreUI Pro React Admin Template](https://coreui.io/pro/react)
* 💪  [CoreUI Pro Vue Admin Template](https://coreui.io/pro/vue)
* 💪  [CoreUI Pro Vue + Laravel Admin Template](https://coreui.io/pro/vue-laravel)

## Admin Templates built on top of CoreUI Pro

| Default Theme | Legacy Theme | Dark Layout |
| --- | --- | --- |
| [![CoreUI Pro Bootstrap Admin Template](https://coreui.io/images/mockups/mockup_3_1_default.png)](https://coreui.io/pro/vue-laravel/) | [![CoreUI Pro Bootstrap Admin Template](https://coreui.io/images/mockups/mockup_3_1_legacy.png)](https://coreui.io/pro/vue-laravel/)| [![CoreUI Pro Bootstrap Admin Template](https://coreui.io/images/mockups/mockup_3_1_dark.png)](https://coreui.io/pro/vue-laravel/)

## Installation

``` bash
# clone the repo
$ git clone https://github.com/coreui/coreui-free-vue-laravel-admin-template.git my-project

# go into app's directory
$ cd my-project/laravel

# install app's dependencies
$ composer install

# install app's dependencies
$ npm install
```

### If you choose SQLite

``` bash
# create database
$ touch database/database.sqlite
```
Copy file ".env.example", and change its name to ".env".
Then in file ".env" replace this database configuration:
* DB_CONNECTION=mysql
* DB_HOST=127.0.0.1
* DB_PORT=3306
* DB_DATABASE=laravel
* DB_USERNAME=root
* DB_PASSWORD=

To this:

```
DB_CONNECTION=sqlite
DB_DATABASE=/path_to_your_project/database/database.sqlite
```

### If you choose PostgreSQL

1. Install PostgreSQL

2. Create user
``` bash
$ sudo -u postgres createuser --interactive
enter name of role to add: laravel
shall the new role be a superuser (y/n) n
shall the new role be allowed to create database (y/n) n
shall the new role be allowed to create more new roles (y/n) n
```
3. Set user password
``` bash
$ sudo -u postgres psql
postgres= ALTER USER laravel WITH ENCRYPTED PASSWORD 'password';
postgres= \q
```
4. Create database
``` bash
$ sudo -u postgres createdb laravel
```
5. Copy file ".env.example", and change its name to ".env".
Then in file ".env" replace this database configuration:

* DB_CONNECTION=mysql
* DB_HOST=127.0.0.1
* DB_PORT=3306
* DB_DATABASE=laravel
* DB_USERNAME=root
* DB_PASSWORD=

To this:

```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=password
```

### If you choose MySQL

1. Install MySQL
2. Create database (this way or another)
``` bash
$ mysql -uroot -p
mysql> create database laravel;
```
Create a user with privileges to the laravel database (root user may not work while it requires a sudo)

3. Update .env file
Copy file ".env.example", and change its name to ".env".
Then in file ".env" complete database configuration:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

### Next step

``` bash
# in your app directory
# generate laravel APP_KEY
$ php artisan key:generate

# generate jwt secret
$ php artisan jwt:secret

# run database migration and seed
$ php artisan migrate:refresh --seed

```

```bash
# go to coreui directory
$ cd ../coreui

# install app's dependencies
$ npm install

```

## Usage

### Test
``` bash
# test
$ php vendor/bin/phpunit
```

### If you need separate backend and frontend

``` bash
# back to laravel directory
$ cd ../laravel

# start local server
$ php artisan serve

$ cd ../coreui

$ npm run serve
```
Open your browser with address: [localhost:8080](localhost:8080)

If you need change backend adress go to file /coreui/src/main.js
And change line:
```js
Vue.prototype.$apiAdress = 'http://127.0.0.1:8000'
```

### If you don't need separate backend and frontend

1. Go to file /laravel/routes/web.php
And uncomment this lines:
```php
Route::get('/{any}', function () {
    return view('coreui.homepage');
})->where('any', '.*');
```
2. Go to file /laravel/config/filesystems.php
And change this line:
```php
'root' => public_path() . '/../../coreui/public/public',
```
To this:
```php
'root' => public_path('public'),
```
3. Go to file /coreui/src/views/media/Media.vue
And change this line:
```js
changePort: 'localhost:8080',
```
To this:
```js
changePort: 'localhost:8000',
```
4. 
``` bash
# back to laravel directory
$ cd ../laravel

# generate mixing
$ npm run dev

# and repeat generate mixing
$ npm run dev

# start local server
$ php artisan serve
```
Open your browser with address: [localhost:8000](localhost:8000) 

### When you have project open in browser

Click "Login" on sidebar menu and log in with credentials:

* E-mail: _admin@admin.com_
* Password: _password_

This user has roles: _user_ and _admin_

--- 

### How to add a link to the sidebar:

> Instructions for CoreUI Free Vue Laravel admin template only. _Pro version have separate instruction._

#### To add a __link__ to the sidebar - modify seeds file:  
 
To add a __title__ to the sidebar - use function `insertTitle()`:
```php
$id = $this->insertTitle( $rolesString, $title );
```
* `$rolesString` - a string with list of user roles this menu element will be available, ex. `"guest,user,admin"`
* `$title` - a string caption visible in sidebar

To add a __dropdown__ menu to the sidebar - use function `beginDropdown()`:
```php
$id = $this->beginDropdown( $rolesString, $visibleName, $href, $iconString);
```
* `$rolesString` - a string with list of user roles this menu element will be available, ex. `"guest,user,admin"`
* `$visibleName` - a string caption visible in sidebar
* `$href` - a href, ex. `/homepage` or `http://example.com`
* `$iconString` - a string containing valid CoreUI icon name (kebab-case). For example: `cil-speedometer` or `cil-pencil`

To end dropdown section - use function `endDropdown()`. 

To add __link__ to __dropdown__ call function `insertLink()` between function calls `beginDropdown()` and `endDropdown()`. 
Example:
```php
$id = $this->beginDropdown('guest,user,admin', 'Some dropdown', 'http://example.com', 'cil-puzzle');
$id = $this->insertLink('guest,user,admin', 'Dropdown name', 'http://example.com');
$this->endDropdown();
```

__IMPORTANT__ - At the end of `run()` function, call `joinAllByTransaction()` function:
```php
$this->joinAllByTransaction();
```

Once done with seeds file edit, __run__:
``` bash 
$ php artisan migrate:refresh --seed
# This command also rollbacks database and migrates it again.
```

## Features

### Table of contents:
* Notes
* Users
* Menu management
* Role management
* Management of the media
* BREAD
* Email Templates

#### Notes
It is an example of data presentation in a pagination table, and CRUD functionality.

#### Users
It is a simple example of how to manage registered users.

#### Menu management 
Menu management allows you to toggle the visibility of menu items for individual user roles.

#### Role management
Allows you to create, edit, delete and reorder user roles.
When a user has more than one role, the highest hierarchical role is used to create a menu for him.


# Configuration du projet
Il faut changer les configurations suivantes :
- Media
- main.js
- web.php

# Compilation du projet (Cette commande est exécutée au niveau du backend(laravel))
- npm run prod
- npm run dev
# Exécution du projet
- npm run serve
- php artisan serve
# Pour spécifier l'adresse au niveau de laravel
- php artisan --host=192.168.1.5
- php artisan --host=data.tenado.rcdi.bf

# Configuration de ssh
- cd ~/.ssh && ssh-keygen -t ed25519 -C "daohamadou@gmail.com"
- eval "$(ssh-agent -s)"
- ssh-add ~/.ssh/id_ed25519
- clip < ~/.ssh/id_ed25519.pub

# Configuration du repertoire
Settings->Deploy keys->Add deploy key

sudo a2enmod rewrite

# Deploiement
sudo su
cd /home/rcdi
chown -R rcdi:rcdi /home/rcdi/rcdi-bf
cd rcdi-bf
su rcdi
cd ~/rcdi-bf
git checkout master
git checkout -f
git pull origin master
cd coreui
npm run build
rm -rf /home/rcdi/rcdi-bf/laravel/public/js
rm -rf /home/rcdi/rcdi-bf/laravel/public/css
cp -r /home/rcdi/rcdi-bf/coreui/dist/* /home/rcdi/rcdi-bf/laravel/public/
cp /home/rcdi/rcdi-bf/coreui/dist/index.html /home/rcdi/rcdi-bf/laravel/resources/views/coreui/homepage.blade.php
git branch -D prod-1
git push origin -d prod-1
git checkout -b prod-1
cp /home/rcdi/rcdi-bf/.gitignore-prod /home/rcdi/rcdi-bf/.gitignore
cp /home/rcdi/rcdi-bf/laravel/.gitignore-prod /home/rcdi/rcdi-bf/laravel/.gitignore
git add .
git commit -m "_"
git push origin prod-1
exit
cd /home/rcdi/rcdi-bf
chown -R www-data:www-data laravel/public
chown -R www-data:www-data laravel/storage


git add * 
git stash
git pull


# Deploiement ANPTIC

npm run build
rm -rf /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/public/js
rm -rf /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/public/css
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/coreui/dist/* /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/public/
cp /home/rcdi/rcdi-bf-new/rcdi-bf/coreui/dist/index.html /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/resources/views/coreui/homepage.blade.php
# Tenado

cd /home/rcdi/rcdi-bf-new
<!-- chown -R root:root rcdi-bf -->
cd rcdi-bf
git checkout -f
git checkout master
git branch -D prod-1
git checkout -f
git checkout master
git pull origin master
git checkout prod-1
git pull origin prod-1
git checkout -b prod-1
git checkout prod-1
<!-- cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/* /home/tenado/laravel/ -->
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/app /home/tenado/laravel/
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/config /home/tenado/laravel/
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/database /home/tenado/laravel/
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/public /home/tenado/laravel/
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/resources /home/tenado/laravel/
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/routes /home/tenado/laravel/
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/storage /home/tenado/laravel/
cp -r /home/tenado/laravel/publictenado/favicon.ico /home/tenado/laravel/public
cp -r /home/tenado/laravel/publictenado/favicon.png /home/tenado/laravel/public

chown -R www-data:www-data /home/tenado/laravel/public
chown -R www-data:www-data /home/tenado/laravel/storage
# Manga

cd /home/rcdi/rcdi-bf-new/rcdi-bf
<!-- chown -R root:root rcdi-bf -->
git pull origin prod-1
git checkout prod-1
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/app /home/manga/laravel/
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/config /home/manga/laravel/
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/database /home/manga/laravel/
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/public /home/manga/laravel/
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/resources /home/manga/laravel/
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/routes /home/manga/laravel/
cp -r /home/rcdi/rcdi-bf-new/rcdi-bf/laravel/storage /home/manga/laravel/
cp -r /home/manga/laravel/publicmanga/favicon.ico /home/manga/laravel/public
cp -r /home/manga/laravel/publicmanga/favicon.png /home/manga/laravel/public

chown -R www-data:www-data /home/manga/laravel/public
chown -R www-data:www-data /home/manga/laravel/storage



# COMMANDE SUPPRESSION DES DONNEES EDUCATIONS ET ETAT CIVIL
DELETE FROM `donnees` WHERE indicateur_id in (select id from indicateurs where groupe_id=1 or groupe_id=3)
# SUPPRESSION DES INDICATEURS EDUCATIONS ET ETAT CIVIL
DELETE FROM `indicateurs` WHERE groupe_id=1 or groupe_id=3

sudo certbot --apache -d your_domain -d www.your_domain


su rcdi
cd /home/rcdi/rcdi-bf/
git pull
cd /home/rcdi/rcdi-bf/coreui
npm run build
exit

rm -rf /home/rcdi/tenado/public/js
rm -rf /home/rcdi/tenado/public/css
cp -r /home/rcdi/rcdi-bf/coreui/dist/* /home/rcdi/tenado/public/
cp -r /home/rcdi/rcdi-bf/laravel/app /home/rcdi/tenado/
cp -r /home/rcdi/rcdi-bf/laravel/routes /home/rcdi/tenado/
cp /home/rcdi/rcdi-bf/coreui/dist/index.html /home/rcdi/tenado/resources/views/coreui/homepage.blade.php


rm -rf /home/rcdi/manga/public/js
rm -rf /home/rcdi/manga/public/css
cp -r /home/rcdi/rcdi-bf/coreui/dist/* /home/rcdi/manga/public/
cp -r /home/rcdi/rcdi-bf/laravel/app /home/rcdi/manga/
cp -r /home/rcdi/rcdi-bf/laravel/routes /home/rcdi/manga/
cp /home/rcdi/rcdi-bf/coreui/dist/index.html /home/rcdi/manga/resources/views/coreui/homepage.blade.php


// test
su rcdi
chown -R www-data:www-data /home/rcdi/rcdi-bf/laravel/public
cd /home/rcdi/rcdi-bf
git pull
cd /home/rcdi/rcdi-bf/coreui
npm run build
rm -rf /home/rcdi/rcdi-bf/laravel/public/js
rm -rf /home/rcdi/rcdi-bf/laravel/public/css
cp -r /home/rcdi/rcdi-bf/coreui/dist/* /home/rcdi/rcdi-bf/laravel/public/
cp /home/rcdi/rcdi-bf/coreui/dist/index.html /home/rcdi/rcdi-bf/laravel/resources/views/coreui/homepage.blade.php
exit
chown -R www-data:www-data /home/rcdi/rcdi-bf/laravel/public
chown -R www-data:www-data /home/rcdi/rcdi-bf/laravel/storage