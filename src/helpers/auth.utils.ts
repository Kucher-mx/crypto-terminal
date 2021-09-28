import { NavigateFunction } from "react-router-dom";
import {
  createUserDoc,
  createUserWithEmailAndPasswordHandler,
  getDataByUserId,
  signInWithEmailAndPasswordHandler,
} from "../firebase/firebase";

export type formState = {
  email: string;
  password: string;
  repeatPass: string;
  error: string;
};

export const onSubmitLoginHandler = async (
  e: React.FormEvent<HTMLFormElement>,
  state: formState,
  navigation: NavigateFunction,
  setState: (state: formState) => void
) => {
  e.preventDefault();
  try {
    const { email, password } = state;
    await signInWithEmailAndPasswordHandler(email, password);
    navigation("/");
  } catch (e) {
    setState({ ...state, error: `auth error: + ${e}` });
    console.log("auth error: ", e);
  }
};

export const OnSubmitRegHandler = async (
  e: React.FormEvent<HTMLFormElement>,
  state: formState,
  navigation: NavigateFunction,
  setState: (state: formState) => void
) => {
  e.preventDefault();
  try {
    const { email, password, repeatPass } = state;
    if (password.toLowerCase() === repeatPass.toLowerCase()) {
      const userInfo = await createUserWithEmailAndPasswordHandler(
        email,
        password
      );
      await createUserDoc(userInfo.user.uid, {
        apiKey: "",
        secretApiKey: "",
        email: userInfo.user.email,
      });
      const dataToSet = await getDataByUserId(userInfo.user.uid);
      dataToSet && setToSessionStorage({ ...dataToSet, id: userInfo.user.uid });
      navigation("/");
    } else {
      setState({ ...state, error: `passwords must be same` });
    }
  } catch (e) {
    setState({ ...state, error: `auth error: + ${e}` });
    console.log("auth error: ", e);
  }
};

export const setToSessionStorage = (data: any) => {
  sessionStorage.setItem("userData", JSON.stringify(data));
};
