import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyAiDVbw7Ch6gPPtgX-1fah0GYSl56HJxU4",
  authDomain: "crwn-db-85ec2.firebaseapp.com",
  databaseURL: "https://crwn-db-85ec2.firebaseio.com",
  projectId: "crwn-db-85ec2",
  storageBucket: "crwn-db-85ec2.appspot.com",
  messagingSenderId: "924966512419",
  appId: "1:924966512419:web:c6c85635084d77911b8e96",
  measurementId: "G-Z2N8TCB2HP",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore().doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth().signInWithPopup(provider);

export default firebase;
