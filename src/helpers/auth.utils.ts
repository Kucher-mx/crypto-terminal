import { NavigateFunction } from "react-router-dom";
import {
  createUserWithEmailAndPasswordHandler,
  signInWithEmailAndPasswordHandler,
} from "../firebase/firebase";

export type formState = {
  email: string;
  password: string;
};

export const onSubmitLoginHandler = async (
  e: React.FormEvent<HTMLFormElement>,
  state: formState,
  navigation: NavigateFunction
) => {
  e.preventDefault();
  try {
    const { email, password } = state;
    await signInWithEmailAndPasswordHandler(email, password);
    navigation("/");
  } catch (e) {
    console.log("auth error: ", e);
  }
};

export const OnSubmitRegHandler = async (
  e: React.FormEvent<HTMLFormElement>,
  state: formState,
  navigation: NavigateFunction
) => {
  e.preventDefault();
  try {
    const { email, password } = state;
    await createUserWithEmailAndPasswordHandler(email, password);
    navigation("/");
  } catch (e) {
    console.log("auth error: ", e);
  }
};
