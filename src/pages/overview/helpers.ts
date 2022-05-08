/* eslint-disable no-restricted-syntax */
import { ITotalResultsData } from '../../interfaces/types';

const getWinsLooses = (data: any): ITotalResultsData => {
  const buferObj = {
    win: {
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
      sunday: 0,
    },
    loose: {
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
      sunday: 0,
    },
  };
  data.forEach((item: any) => {
    item.win.forEach((el: any) => {
      buferObj.win[el.day as keyof typeof buferObj.win] += el.value;
    });

    item.loose.forEach((el: any) => {
      buferObj.loose[el.day as keyof typeof buferObj.loose] += el.value;
    });
  });

  const winArray = [];
  const looseArray = [];

  for (const key in buferObj.win) {
    if (Object.prototype.hasOwnProperty.call(buferObj.win, key)) {
      winArray.push({
        day: key,
        value: buferObj.win[key as keyof typeof buferObj.win],
      });
    }
  }

  for (const key in buferObj.loose) {
    if (Object.prototype.hasOwnProperty.call(buferObj.loose, key)) {
      looseArray.push({
        day: key,
        value: buferObj.loose[key as keyof typeof buferObj.loose],
      });
    }
  }

  return {
    totalWins: winArray,
    totalLooses: looseArray,
  };
};

export default getWinsLooses;
