import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis,
} from 'recharts';
import { Spin } from 'antd';
import { IChartData, ITotalResultsData } from '../../interfaces/types';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { getChartsData, getTotalResultData } from '../../services/reducers/chartReducer/chartReducer';
import Api from '../../utils/Api';
import getWinsLooses from './helpers';
import styles from './overview.module.scss';

function OverviewPage() : JSX.Element | null {
  const [isLoading, setIsLoading] = useState(false);

  const totalResultsData : ITotalResultsData = useAppSelector(
    (state) => state.chartReducer.totalResultsData,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    Api.getChart()
      .then((data : IChartData[]) => {
        dispatch(getChartsData(data));
        dispatch(getTotalResultData(getWinsLooses(data)));
        setIsLoading(true);
      });
  }, []);

  return (
    <div className={styles.overview}>
      {!isLoading && <Spin />}
      {isLoading && (
      <>
        <LineChart width={800} height={400} data={totalResultsData.totalWins}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="day" />
          <YAxis />
        </LineChart>
        <LineChart width={800} height={400} data={totalResultsData.totalLooses}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="day" />
          <YAxis />
        </LineChart>
      </>
      )}
    </div>
  );
}

export default OverviewPage;
