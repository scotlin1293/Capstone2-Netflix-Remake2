import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

const Config = {
  apiKey: "AIzaSyA1io58YwuaYArSOhxHNqJE2A7HFIss9VM",
  authDomain: "scotlin-netflix-clone.firebaseapp.com",
  databaseURL: "https://scotlin-netflix-clone-default-rtdb.firebaseio.com/",
  projectId: "scotlin-netflix-clone",
  storageBucket: "scotlin-netflix-clone.appspot.com",
  messagingSenderId: "714325385810",
  appId: "1:714325385810:web:630553b17d1b5b8e3d358b"
};

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(`${error} User Can't be registered`);
    }
  }
  return userRef;
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
