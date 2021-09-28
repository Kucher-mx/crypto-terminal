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
    navigation: NavigateFunction,
    setState: (state: formState) => void
  ) => void,
  state: formState,
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    state: formState
  ) => void,
  navigation: NavigateFunction,
  type: string,
  setState: (state: formState) => void
) => (
  <div className="input-wrapper">
    <form
      className="auth-form"
      onSubmit={(e) => submitHandler(e, state, navigation, setState)}
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
      {type === "register" ? (
        <Input
          placeholder="repeat your password"
          type="password"
          value={state.repeatPass}
          onChange={(e) => changeHandler(e, state)}
          name="repeatPass"
        />
      ) : null}
      {state.error ? <div className="error">{state.error}</div> : null}
      <div className="buttons-wrapper">
        <button
          type="submit"
          className="form-submit"
          disabled={Boolean(state.error)}
        >
          {type}
        </button>
        <div className="or">or</div>
        <Button
          variant="contained"
          size="medium"
          onClick={() => signInWithGoogle(navigation)}
        >
          Log in with Google
        </Button>
      </div>
    </form>
  </div>
);

const Auth = () => {
  const [state, setstate] = useState({
    email: "",
    password: "",
    repeatPass: "",
    error: "",
  });
  const [tab, setTab] = useState(true);
  const navigation = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setstate({
      ...state,
      [name]: value,
      error: "",
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-wrapper">
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
              "register",
              setstate
            )
          : generateTab(
              onSubmitLoginHandler,
              state,
              onChangeHandler,
              navigation,
              "login",
              setstate
            )}
      </div>
    </div>
  );
};

export default Auth;
