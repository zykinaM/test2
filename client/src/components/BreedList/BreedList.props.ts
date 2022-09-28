export interface IPrice {
  buy: number;
  sell: number;
}

export type Prices = IPrice[]

export interface ICatStock extends IPrice {
  breed: string;
}

export type Timeline = ICatStock[][];

export type BreedPrices = { [x: string]: Prices };
