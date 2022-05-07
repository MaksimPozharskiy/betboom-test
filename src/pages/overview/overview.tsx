import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { getChartsData } from '../../services/reducers/chartReducer';
import Api from '../../utils/Api';

function OverviewPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const chartsData = useAppSelector((state) => state.chartReducer.chartsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Api.getChart()
      .then((data) => dispatch(getChartsData(data)));
  }, []);

  return (
    <header>
      <p>gello</p>
    </header>
  );
}

export default OverviewPage;
