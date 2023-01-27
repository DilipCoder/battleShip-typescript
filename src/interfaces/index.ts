export interface IShip {
    shipType: string;
    shipId: string;
    positions: number[][];
    size: number;
    hitCount: number;
  }
  
export interface IShips{
[key:string]: IShip
}

export interface IGeneralObj {
    [key:string]: any;
}