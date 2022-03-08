const firebaseConfig = {
    apiKey: "AIzaSyAooC6GZdOow4Ua5laOURlRDzUnpQb8Ih8",
    authDomain: "personal-web-6f353.firebaseapp.com",
    projectId: "personal-web-6f353",
    storageBucket: "personal-web-6f353.appspot.com",
    messagingSenderId: "137010214646",
    appId: "1:137010214646:web:3a473b027ca93ced2aded7"
  };
  
          firebase.initializeApp(firebaseConfig);
          const db = firebase.firestore();
          db.settings({ timestampsInSnapshots: true }); 

          