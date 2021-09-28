import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import Input from "../../components/input/input.component";
import { auth, getDataByUserId, updateUserDoc } from "../../firebase/firebase";
import "./profile.styles.css";

const Profile = () => {
  const [state, setstate] = useState({
    apiKey: "",
    secretApiKey: "",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setstate({
      ...state,
      [name]: value,
    });
  };
  useEffect(() => {
    const json = sessionStorage.getItem("userData");
    if (json) {
      const parsed = JSON.parse(json);
      setstate({ apiKey: parsed.apiKey, secretApiKey: parsed.secretApiKey });
    }
  }, []);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const json = sessionStorage.getItem("userData");
    if (json) {
      const id = JSON.parse(json).id;
      updateUserDoc(id, state);
    }
  };
  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile_content">
          <div className="profile_email"></div>
          <div className="input-wrapper">
            <form className="profile_form" onSubmit={onSubmitHandler}>
              <Input
                placeholder="enter your api key"
                type="text"
                value={state.apiKey}
                onChange={(e) => onChangeHandler(e)}
                name="apiKey"
              />
              <Input
                placeholder="enter your api secret key"
                type="text"
                value={state.secretApiKey}
                onChange={(e) => onChangeHandler(e)}
                name="secretApiKey"
              />
              <button type="submit" className="form-submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
