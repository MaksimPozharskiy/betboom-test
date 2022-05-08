import { Select } from 'antd';
import React, { useEffect } from 'react';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis,
} from 'recharts';
import { IChartData, IPlayer, IResultData } from '../../interfaces/types';
import { useAppSelector, useAppDispatch } from '../../services/hooks';
import { getPlayers, setCurrentPlayer, setPlayerbets } from '../../services/reducers/playersReducer';
import Api from '../../utils/Api';
import isEmptyArray from '../../utils/helpers';
import styles from './players.module.scss';

function PlayersPage() : JSX.Element | null {
  const { Option } = Select;
  const players : IPlayer[] = useAppSelector((state) => state.playersReducer.players);
  const currentPlayer : IPlayer | null = useAppSelector(
    (state) => state.playersReducer.currentPlayer,
  );
  const playerbets : IResultData[] = useAppSelector(
    (state) => state.playersReducer.playerbets,
  );
  const dispatch = useAppDispatch();

  // Если бы данные в API у запросов /chart и /players не отличались, тогда бы выглядело так:
  // useEffect(() => {
  //   Api.getPlayers()
  //     .then((data : any) => {
  //       dispatch(getPlayers(data));
  //       dispatch(setCurrentPlayers({
  //         Name: data[0].Name,
  //         id: data[0].id,
  //       }));
  //     });
  // }, []);

  useEffect(() => {
    Api.getChart()
      .then((data : IChartData[]) => {
        const playersArr = data.map((item: IChartData) => ({
          Name: item.name,
          id: item.id,
        }));
        dispatch(getPlayers(playersArr));
        dispatch(setCurrentPlayer({
          Name: playersArr[0].Name,
          id: playersArr[0].id,
        }));
      });
  }, []);

  useEffect(() => {
    if (currentPlayer) {
      Api.getChartByIdPLayer(currentPlayer.id)
        .then((data: IChartData) => {
          dispatch(setPlayerbets(data.bets));
        });
    }
  }, [currentPlayer]);

  // @Todo check in presentation any type
  const handleChange = (value: string, data: any) => {
    dispatch(setCurrentPlayer({
      Name: data.value,
      id: data.key,
    }));
    if (currentPlayer) {
      Api.getChartByIdPLayer(currentPlayer.id)
        .then((chart: IChartData) => {
          dispatch(setPlayerbets(chart.bets));
        });
    }
  };

  return (
    <div className={styles.players}>
      {!isEmptyArray(players) && (
        <>
          <div className={styles.selectWrap}>
            <Select
              defaultValue={players[0].Name}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              {players.map(
                (item: IPlayer) => <Option key={item.id} value={item.id}>{item.Name}</Option>,
              )}
            </Select>
          </div>
          <div className={styles.chartContainer}>
            <LineChart width={800} height={400} data={playerbets}>
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="day" />
              <YAxis />
            </LineChart>
          </div>

        </>
      )}

    </div>
  );
}

export default PlayersPage;
