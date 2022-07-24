import ILastPaper from "./ILastPaper";

export default interface IRobot {
  id: number;
  title: String;
  running: number;
  simulation: number;
  stock_codes: String;
  last_paper: ILastPaper;
  type: String;
  paper: String;
  position: number;
  paper_type: number;
  paper_value: number;
  profit: number;
  daily_balance: number;
  number_trades: number;
}
