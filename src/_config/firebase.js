import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyBYD3K0EkvXuHQ19m-LiIZkrUySWkajMrA",
    authDomain: "clubestas.firebaseapp.com",
    projectId: "clubestas",
    storageBucket: "clubestas.appspot.com",
    messagingSenderId: "759899373558",
    appId: "1:759899373558:web:aaea64b94bd01407a391d7"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// const firebaseFirestore = firebase.firestore();
const firebaseDatabase = firebase.database();

const contentsRefs = firebaseDatabase.ref("contents");

export { firebaseDatabase, contentsRefs };

// export default firebaseFirestore;
