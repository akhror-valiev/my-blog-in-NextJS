import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDHu9fN9ElAqHtIscqDT7b7H6DYbuFYc3Y",
	authDomain: "my-blog-nextjs.firebaseapp.com",
	projectId: "my-blog-nextjs",
	storageBucket: "my-blog-nextjs.appspot.com",
	messagingSenderId: "974654021860",
	appId: "1:974654021860:web:f49dca7cbcea2448038cf1",
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, db, storage, serverTimestamp };
