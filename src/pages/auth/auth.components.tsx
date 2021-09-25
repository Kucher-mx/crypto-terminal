import React, { useState } from "react";
import Input from "../../components/input/input.component";
import Button from "@mui/material/Button";

import "./auth.styles.css";
import { signInWithGoogle } from "../../firebase/firebase";
import {
  formState,
  onSubmitLoginHandler,
  OnSubmitRegHandler,
} from "../../helpers/auth.utils";
import Tab from "../../components/tab/tab.component";
import { NavigateFunction, useNavigate } from "react-router-dom";

const generateTab = (
  submitHandler: (
    e: React.FormEvent<HTMLFormElement>,
    state: formState,
    navigation: NavigateFunction
  ) => void,
  state: formState,
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    state: formState
  ) => void,
  navigation: NavigateFunction,
  type: string
) => (
  <div className="input-wrapper">
    <form
      className="auth-form"
      onSubmit={(e) => submitHandler(e, state, navigation)}
    >
      <Input
        placeholder="enter your email"
        type="text"
        value={state.email}
        onChange={(e) => changeHandler(e, state)}
        name="email"
      />
      <Input
        placeholder="enter your password"
        type="password"
        value={state.password}
        onChange={(e) => changeHandler(e, state)}
        name="password"
      />
      <div className="buttons-wrapper">
        <button type="submit" className="form-submit">
          {type}
        </button>
        <div className="or">or</div>
        <Button
          variant="contained"
          size="small"
          onClick={() => signInWithGoogle(navigation)}
        >
          Log in with Google
        </Button>
      </div>
    </form>
  </div>
);

const Auth = () => {
  const [state, setstate] = useState({ email: "", password: "" });
  const [tab, setTab] = useState(true);
  const navigation = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setstate({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="auth-page">
      <div className="tabs">
        <Tab
          title="registration"
          onClickHandler={setTab}
          tabType={true}
          current={tab}
        />
        <Tab
          title="login"
          onClickHandler={setTab}
          tabType={false}
          current={tab}
        />
      </div>
      {tab
        ? generateTab(
            OnSubmitRegHandler,
            state,
            onChangeHandler,
            navigation,
            "register"
          )
        : generateTab(
            onSubmitLoginHandler,
            state,
            onChangeHandler,
            navigation,
            "login"
          )}
    </div>
  );
};

export default Auth;
