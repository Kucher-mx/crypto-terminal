import * as firebase from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAeEcVxf6NiYnKWqMu8LcoCb2Ysti9red8",
  authDomain: "crypto-terminal-3309a.firebaseapp.com",
  projectId: "crypto-terminal-3309a",
  storageBucket: "crypto-terminal-3309a.appspot.com",
  messagingSenderId: "240452210237",
  appId: "1:240452210237:web:f1bc9955c88205f6332454",
  measurementId: "G-41L4YQC7Y7",
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const auth = getAuth(app);

export const createUserWithEmailAndPasswordHandler = (
  email: string,
  password: string
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });
};

// export const createUserProfileDocument = async (
//   userAuth: any,
//   additionalData: any
// ) => {
//   if (!userAuth) return;

//   const userRef = await getDocs(collection(app, `users/${userAuth.uid}`));

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   }

//   return userRef;
// };

//   export const addCollectionAndDocuments = async (
//     collectionKey,
//     objectsToAdd
//   ) => {
//     const collectionRef = firestore.collection(collectionKey);

//     const batch = firestore.batch();
//     objectsToAdd.forEach(obj => {
//       const newDocRef = collectionRef.doc();
//       batch.set(newDocRef, obj);
//     });

//     return await batch.commit();
//   };

//   export const convertCollectionsSnapshotToMap = collections => {
//     const transformedCollection = collections.docs.map(doc => {
//       const { title, items } = doc.data();

//       return {
//         routeName: encodeURI(title.toLowerCase()),
//         id: doc.id,
//         title,
//         items
//       };
//     });

//     return transformedCollection.reduce((accumulator, collection) => {
//       accumulator[collection.title.toLowerCase()] = collection;
//       return accumulator;
//     }, {});
//   };

// export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = async (navigation: NavigateFunction) => {
  try {
    const credentials = await signInWithPopup(auth, provider);
    navigation("/");
    console.log(credentials);
  } catch (e) {
    console.log(e);
  }
};

export const signInWithEmailAndPasswordHandler = async (
  email: string,
  password: string
) => await signInWithEmailAndPassword(auth, email, password);

export const signUpWithEmailAndPasswordHandler = async (
  email: string,
  password: string
) => await createUserWithEmailAndPassword(auth, email, password);

export default firebase;
