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
  state: formState
) => {
  e.preventDefault();
  try {
    const { email, password } = state;
    await signInWithEmailAndPasswordHandler(email, password);
  } catch (e) {
    console.log("auth error: ", e);
  }
};

export const OnSubmitRegHandler = async (
  e: React.FormEvent<HTMLFormElement>,
  state: formState
) => {
  e.preventDefault();
  const { email, password } = state;
  createUserWithEmailAndPasswordHandler(email, password);
};
