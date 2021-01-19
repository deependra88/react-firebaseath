import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBEtrYFrZ5zVk7HIeuVRPJIlmyFTvTNtx4",
  authDomain: "ecommercefbase.firebaseapp.com",
  projectId: "ecommercefbase",
  storageBucket: "ecommercefbase.appspot.com",
  messagingSenderId: "708024530651",
  appId: "1:708024530651:web:fd1cacfe97321b02be3efe"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
