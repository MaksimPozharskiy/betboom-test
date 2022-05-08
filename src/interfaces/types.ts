export interface IResultData {
  day: string;
  value: number;
}

export interface ITotalResultsData {
  totalWins: IResultData[],
  totalLooses: IResultData[]
}

export interface IChartData {
  name: string,
  win: IResultData[],
  loose: IResultData[],
  bets: IResultData[],
  id: number,
}
