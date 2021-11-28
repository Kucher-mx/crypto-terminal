import React from 'react';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { JsxEmit } from 'typescript';
import { setCoinsSort } from '../../redux/actions';
import { StateType } from '../../types/redux.types';
import List from '../list/list.component';
import ListItemPart from '../listItem/listItemPart.component';
import Title from '../title/title.component';

import './instruments.styles.css';

const compareCoins = (coinF: string | number, coinS: string | number, type: string) => {
  if (type === 'number') {
    const fNumber = Number(coinF);
    const sNumber = Number(coinS);
    return fNumber > sNumber ? 1 : fNumber < sNumber ? -1 : 0;
  } else {
    return coinF > coinS ? 1 : coinF < coinS ? -1 : 0;
  }
};

const sortCoins = (unsortedCoins: any[], field: string, type: boolean) => {
  return unsortedCoins.sort((item1: any, item2: any) =>
    type
      ? compareCoins(
          item1[field],
          item2[field],
          field === 'c' || field === 'q' || field === 'P' ? 'number' : 'string',
        )
      : compareCoins(
          item2[field],
          item1[field],
          field === 'c' || field === 'q' || field === 'P' ? 'number' : 'string',
        ),
  );
};
// false small to big, true big to small
const Instruments = (): JSX.Element => {
  const dispatch = useDispatch();
  const sortType = useSelector((state: StateType) => state.coinsSortProps);

  const coinsData: Array<any> = useSelector((state: StateType) => state.coins);

  let sortedData = sortCoins(coinsData, sortType.field, sortType.key);

  const onClickHandler = (e: React.MouseEvent) => {
    const fieldName = e.currentTarget.id;
    if (sortType.field !== fieldName) {
      dispatch(setCoinsSort({ field: fieldName, key: false }));
    } else {
      dispatch(setCoinsSort({ ...sortType, key: !sortType.key }));
    }
    sortedData = sortCoins(coinsData, sortType.field, sortType.key);
  };

  return (
    <>
      {sortedData.length ? (
        <div className="instruments">
          <Title title="Instruments" />
          <div className="list-item-4-e instruments-list-header">
            <ListItemPart
              title={
                sortType.field === 's'
                  ? sortType.key
                    ? 'Instrument↑'
                    : 'Instrument↓'
                  : 'Instrument'
              }
              textColor={'#B6B9C0'}
              fieldName={'s'}
              onClickHandler={onClickHandler}
            />
            <ListItemPart title={'price'} textColor={'#B6B9C0'} />
            <ListItemPart
              title={sortType.field === 'P' ? (sortType.key ? '24h %↑' : '24h %↓') : '24h %'}
              textColor={'#B6B9C0'}
              fieldName={'P'}
              onClickHandler={onClickHandler}
            />
            <ListItemPart
              title={sortType.field === 'q' ? (sortType.key ? '24h vol↑' : '24h vol↓') : '24h vol'}
              textColor={'#B6B9C0'}
              fieldName={'q'}
              onClickHandler={onClickHandler}
            />
          </div>
          <div className="instruments-wrapper">
            <List
              items={sortedData}
              type="coins"
              color={{
                text: '#000',
              }}
            />
          </div>
        </div>
      ) : (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
      )}
    </>
  );
};

export default Instruments;
