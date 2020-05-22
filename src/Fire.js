import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDE6m1Vq92CrmdQNQwKWU-pjWIKgsU54g4",
    authDomain: "restorationsky-b337c.firebaseapp.com",
    databaseURL: "https://restorationsky-b337c.firebaseio.com",
    projectId: "restorationsky-b337c",
    storageBucket: "restorationsky-b337c.appspot.com",
    messagingSenderId: "552329115702",
    appId: "1:552329115702:web:ed1748815f887801be4097",
    measurementId: "G-R0GV1Z9CXF"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;