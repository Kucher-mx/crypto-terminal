import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAsset } from '../../redux/actions';
import { StateType } from '../../types/redux.types';
import ListItemPart from './listItemPart.component';

type Props = {
  data: any;
};

const CoinsListItem = ({ data }: Props) => {
  const dispatch = useDispatch();
  const asset = useSelector((state: StateType) => state.asset);
  const styleProps = {
    background: 'rgba(255, 255, 255, 0.1);',
  };

  const textColor = data.p > 0 ? '#5ABD2B' : '#EF5350';
  return (
    <div
      className="list-item-4-e"
      onClick={() => {
        dispatch(setAsset(data.s));
      }}
      style={{ ...(data.s === asset ? styleProps : {}) }}
    >
      <ListItemPart title={data.s} textColor={'#D3D3D3'} />
      <ListItemPart title={data.c} textColor={textColor} />
      <ListItemPart
        title={
          Number(Number(data.P).toFixed(2)) > 0
            ? `+${Number(data.P).toFixed(2)}%`
            : `${Number(data.P).toFixed(2)}%`
        }
        textColor={textColor}
      />
      <ListItemPart title={Number(data.q).toFixed(0)} textColor={'#D3D3D3'} />
    </div>
  );
};

export default CoinsListItem;
