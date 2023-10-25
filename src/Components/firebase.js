
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA-94-PwJUL9JeGqerFvvzlo7Ifsmp2C0A",
    authDomain: "my-whatsapp-clone-2023.firebaseapp.com",
    projectId: "my-whatsapp-clone-2023",
    storageBucket: "my-whatsapp-clone-2023.appspot.com",
    messagingSenderId: "666507237546",
    appId: "1:666507237546:web:9cfd3633172e597a1a98d3",
    measurementId: "G-16V4DHT301"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

