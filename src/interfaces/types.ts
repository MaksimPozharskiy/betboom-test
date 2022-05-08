export interface IResultData {
  day: string;
  value: number;
}

export interface ITotalResultsData {
  totalWins: IResultData[],
  totalLooses: IResultData[]
}

export interface IPlayer {
  Name: string,
  id: number,
}

export interface IChartData {
  name: string,
  id: number,
  win: IResultData[],
  loose: IResultData[],
  bets: IResultData[],
}
