import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAHyjgABOf6jTMs_5XkUXhceK-HFzxKfNk",
    authDomain: "paginas-6e0b1.firebaseapp.com",
    projectId: "paginas-6e0b1",
    storageBucket: "paginas-6e0b1.appspot.com",
    messagingSenderId: "407515551096",
    appId: "1:407515551096:web:42253edee4fd71fba6248d",
    measurementId: "G-2NZLKYYVLH"
};
if (!firebase.apps.lenghth) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;