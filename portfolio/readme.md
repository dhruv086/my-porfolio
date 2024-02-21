# To run locally

first login to firebase and create a new web app.

then change the firebase config in form.js


```
const firebaseConfig = {
  apiKey: "AIzaSyDdm2uAizdXLwq-MfYd5DyXiHK_aD9Z_dw",
  authDomain: "portfolio-a595a.firebaseapp.com",
  databaseURL: "https://portfolio-a595a-default-rtdb.firebaseio.com",
  projectId: "portfolio-a595a",
  storageBucket: "portfolio-a595a.appspot.com",
  messagingSenderId: "151809493976",
  appId: "1:151809493976:web:2d4d1626555d78205d80ad"
};
```
then change the rules in the realtime database
```
{
  "rules": {
    ".read": false,
    ".write": true
  }
}
```
and at last change the rules in the firestore database
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read:if false;
      allow write:if true;
    }
  }
}
```
