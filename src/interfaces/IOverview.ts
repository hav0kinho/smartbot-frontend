import IPaper from "./IPaper";

export default interface IOverview {
  moviment_summary: number;
  transactions: number;
  papers: IPaper[];
}
