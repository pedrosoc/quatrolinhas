import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyBMAvfy0K6HMT8p6qp3avqmfwtjfYxpYUE",
    authDomain: "linhas-fdfd6.firebaseapp.com",
    databaseURL: "https://linhas-fdfd6-default-rtdb.firebaseio.com",
    projectId: "linhas-fdfd6",
    storageBucket: "linhas-fdfd6.appspot.com",
    messagingSenderId: "981009055503",
    appId: "1:981009055503:web:b208cc1362ed112776c87a",
    measurementId: "G-M0VTDC8JZ2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// const firebaseFirestore = firebase.firestore();
const firebaseDatabase = firebase.database();

const contentsRefs = firebaseDatabase.ref("contents");

export { firebaseDatabase, contentsRefs };

// export default firebaseFirestore;
