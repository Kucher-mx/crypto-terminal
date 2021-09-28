import * as firebase from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";
import { setToSessionStorage } from "../helpers/auth.utils";
import { firebaseUsersData } from "../types/gen.types";

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

export const createUserWithEmailAndPasswordHandler = async (
  email: string,
  password: string
) => {
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  console.log(credentials);
  return credentials;
};

export const createUserDoc = async (
  userAuthId: string,
  data: firebaseUsersData
) => {
  try {
    const setDocRef = doc(firestore, "users", userAuthId);
    await setDoc(setDocRef, {
      apiKey: data.apiKey,
      secretApiKey: data.secretApiKey,
      created_at: new Date(),
      email: data.email,
    });
  } catch (e) {
    console.log("create doc error: ", e);
  }
};

export const updateUserDoc = async (
  userAuthId: string,
  data: {
    apiKey: string;
    secretApiKey: string;
  }
) => {
  try {
    const docRef = doc(firestore, "users", userAuthId);
    await setDoc(
      docRef,
      {
        apiKey: data.apiKey,
        secretApiKey: data.secretApiKey,
      },
      { merge: true }
    );
    sessionStorage.clear();
    const dataToSet = await getDataByUserId(userAuthId);
    dataToSet && setToSessionStorage({ ...dataToSet, id: userAuthId });
  } catch (e) {
    console.log("update doc error: ", e);
  }
};

export const getDataByUserId = async (userAuthId: string) => {
  try {
    const docRef = doc(firestore, "users", userAuthId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such user in db!");
    }
  } catch (e) {
    console.log("error in getting info by user id: ", e);
  }
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = async (navigation: NavigateFunction) => {
  try {
    const credentials = await signInWithPopup(auth, provider);
    const userId = credentials.user.uid;
    const docRef = doc(firestore, "users", userId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      createUserDoc(userId, {
        apiKey: "",
        secretApiKey: "",
        email: credentials.user.email,
      });
    }
    const dataToSet = await getDataByUserId(credentials.user.uid);
    dataToSet &&
      setToSessionStorage({ ...dataToSet, id: credentials.user.uid });
    navigation("/");
  } catch (e) {
    console.log("error in getting info by user id: ", e);
  }
};

export const signInWithEmailAndPasswordHandler = async (
  email: string,
  password: string
) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);

    const dataToSet = await getDataByUserId(credentials.user.uid);
    dataToSet &&
      setToSessionStorage({ ...dataToSet, id: credentials.user.uid });
    return credentials;
  } catch (e) {
    console.log("signIn error: ", e);
  }
};

export const signUpWithEmailAndPasswordHandler = async (
  email: string,
  password: string
) => {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const dataToSet = await getDataByUserId(credentials.user.uid);
    dataToSet &&
      setToSessionStorage({ ...dataToSet, id: credentials.user.uid });
    return credentials;
  } catch (e) {
    console.log("signUp error: ", e);
  }
};

export default firebase;
