import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyALa_45SX4zgEZxE3Co7ia6CVzMk4StKx8",
    authDomain: "loginpage-283412.firebaseapp.com",
    databaseURL: "https://loginpage-283412.firebaseio.com",
    projectId: "loginpage-283412",
    storageBucket: "loginpage-283412.appspot.com",
    messagingSenderId: "568784012922"
};
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
firebase.initializeApp(config);
export default firebase;