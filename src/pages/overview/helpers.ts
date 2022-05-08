/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { ITotalResultsData } from '../../interfaces/types';

export const getWinsLooses = (data: any): ITotalResultsData => {
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
    winArray.push({
      day: key,
      value: buferObj.win[key as keyof typeof buferObj.win],
    });
  }

  for (const key in buferObj.loose) {
    looseArray.push({
      day: key,
      value: buferObj.loose[key as keyof typeof buferObj.loose],
    });
  }

  return {
    totalWins: winArray,
    totalLooses: looseArray,
  };
};
