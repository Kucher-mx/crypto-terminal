import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header.component';
import CheckboxCustom from '../../components/inputs/checkbox/checkbox.component';
import Input from '../../components/inputs/input/input.component';
import Switch from '../../components/inputs/switch/switch.component';
import { updateUserDoc } from '../../firebase/firebase';
import './profile.styles.css';
import { ReactComponent as UserIcon } from '../../components/inputs/input/assets/akar-icons_person.svg';

const Profile = () => {
  const [state, setstate] = useState({
    apiKey: '',
    secretApiKey: '',
    risk: false,
    stopLossCheckBox: false,
    stopLoss: '',
    takeProfitCheckBox: false,
    takeProfit: '',
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type, checked } = e.target;
    setstate({
      ...state,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  useEffect(() => {
    const json = sessionStorage.getItem('userData');
    if (json) {
      const parsed = JSON.parse(json);
      //setstate({ apiKey: parsed.apiKey, secretApiKey: parsed.secretApiKey });
    }
  }, []);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const json = sessionStorage.getItem('userData');
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
          <div className="profile_email">
            <UserIcon /> max.kucher98@gmail.com
          </div>
          <form className="profile_form" onSubmit={onSubmitHandler}>
            <div className="api_block">
              <Input
                placeholder="enter your api key"
                type="text"
                value={state.apiKey}
                onChange={e => onChangeHandler(e)}
                name="apiKey"
                label="API Key"
                icon
              />
              <Input
                placeholder="enter your api secret key"
                type="text"
                value={state.secretApiKey}
                onChange={e => onChangeHandler(e)}
                name="secretApiKey"
                label="Secret Key"
                icon
              />
            </div>

            <div className="risks_block">
              <div className="title">Risks</div>
              <Switch
                name={'risk'}
                id={'risk'}
                onChange={onChangeHandler}
                value={state.risk}
                options={['Auto', 'Manual']}
                customClass={'profile-switch'}
              />
              <div className="risks_inputs">
                <div className="profile-input-block">
                  <div className="label">
                    <CheckboxCustom
                      name={'stopLossCheckBox'}
                      id={'stopLossCheckBox'}
                      onChange={onChangeHandler}
                      value={state.stopLossCheckBox}
                      customClass="profile-checkbox"
                    />
                    Stop-Loss
                  </div>

                  <Input
                    placeholder="stopLoss"
                    type="text"
                    value={state.stopLoss}
                    onChange={onChangeHandler}
                    name="stopLoss"
                  />
                </div>
                <div className="profile-input-block">
                  <div className="label">
                    <CheckboxCustom
                      name={'takeProfitCheckBox'}
                      id={'takeProfitCheckBox'}
                      onChange={onChangeHandler}
                      value={state.takeProfitCheckBox}
                      customClass="profile-checkbox"
                    />
                    Take-Profit
                  </div>

                  <Input
                    placeholder="enter your api secret key"
                    type="text"
                    value={state.takeProfit}
                    onChange={onChangeHandler}
                    name="takeProfit"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="form-submit profile-button">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
