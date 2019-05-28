# infomobi-v4
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## UI / UX
- [ ] [Combine side menu, tabs and login page](http://meumobi.github.io/ionic/2018/11/13/side-menu-tabs-login-page-ionic4.html)
  - tabs: Live, News, Contacts
- [ ] Dynamic theming
  - Config page (toggle theme)
- [ ] OnBoarding

## Misc
- [ ] Multi-language: [ngx-translate](https://github.com/meumobi/meumobi.github.io/blob/master/_posts/_2018-06-06-ngx-translate.md)
- [ ] Analytics
- [ ] OneSignal Push
  - [add push notif register on onBoarding](https://github.com/meumobi/infomobi/issues/355)
- [ ] Sharing items
- [ ] Dynamic updates to Cordova App: [CodePush service](https://ionicframework.com/docs/native/code-push)

## PWA + Web hosting
- [ ] PWA + firebase hosting

## REST API
- [ ] [Master-Detail and REST API](http://meumobi.github.io/ionic/2018/10/08/master-detail-ionic4.html)
- [ ] infinite-scroll
- [ ] pull-to-refresh

## Authentication and restricted access
- [ ] login flow with firebase custom auth
  - meumobi auth payload returns groups of user
  - save user.groups as auth claims
  - auth state handled by firebase
- [ ] Forgot password
- [ ] role based directive
- [ ] Auth guards

## Media download
- [ ] Download files
- [ ] My downloaded files

## Firestore
- [ ] [CRUD items from firestore](http://meumobi.github.io/ionic/2018/10/18/create-crud-app-ionic4-angularfire5.html)
  - CRUD comments (live stream)
  - list comments of user (as author)
- [ ] CRUD profiles + cloud function  
  - cf if user.profile deleted then delete firebase user.auth
  - how to migrate to firebase auth (email + phone)
  - create user.profile w/ latest login datetime
  - [ ]virtual-scroll + type search
- [ ] [Controlling Data Access Using Firebase Auth Custom Claims](https://medium.com/google-developers/controlling-data-access-using-firebase-auth-custom-claims-88b3c2c9352a)

## Firestorage
- [ ] user.picture
- [ ] comment.picture


# Implementation flow
$ npm install ionic typescript -g
$ ionic start nfmb-v4 tabs --type=angular
- Add split pane and side menu
$ ionic g page login
- Disable menu on login page
## Split each feature into a lazy loaded module
- Add menu icon (hamburguer) on tab pages
