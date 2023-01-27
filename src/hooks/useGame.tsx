import {useCallback, useEffect, useState} from 'react';
import data from '../data.json';


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

const loadShipsFromData = (data: { shipTypes: { [key: string]: any; }; layout: any[]; }) => {
  const shipTypes: {[key:string]:any} = data.shipTypes;
  const ships:IShips = {}
  let totalSize = 0;
  data.layout.forEach(value => {
    const shipId = value.ship + value.positions[0].join('-');
    ships[shipId] = {
      shipType: value.ship,
      shipId,
      positions: value.positions,
      size: shipTypes[value.ship].size,
      hitCount: 0,
    }
    totalSize += shipTypes[value.ship].size
  });
  return {ships, totalSize};
}
const DEFAULT_SIZE = 10;

const useGame = () => {
  const [ships, setShips] = useState<IShips>({});
  const [board, setBoard] = useState<number[][]|string[][]>([[]]);
  const [totalShipSize, setTotalShipSize] = useState(Infinity);
  const [totalHitCount, setTotalHitCount] = useState(0);
  const [shipSunk, setShipSunk] = useState<string|boolean>();
  const [isGameOver, setGameOver] = useState(false);

  // can be check for outOf Board errors. 
  // can be checked positions equals to size.
  // can be checked overlapping positions or valid positions
  const loadIntialGame = useCallback(() => {
    const {ships:shipData, totalSize} = loadShipsFromData(data);
    const board = new Array(DEFAULT_SIZE).fill(0).map(_ => new Array(DEFAULT_SIZE).fill(0));
    Object.values(shipData).forEach(({shipId, positions}) => {
      positions.forEach(position => {
        board[position[0]][position[1]] = shipId;
      });
    })
    setBoard(board);
    setShips(shipData);
    setTotalShipSize(totalSize);
  }, []);

  // intial setup
  useEffect(() => {
    loadIntialGame();
  }, [loadIntialGame]);

  // check if game is over
  useEffect(() => {
    if(totalHitCount === totalShipSize){
      setGameOver(true);
    }
  }, [totalHitCount, totalShipSize]);
  

  const handleFire = useCallback((shipId:string) => {
    const count = ships[shipId].hitCount + 1;
    const updatedShips = {
      ...ships,
      [shipId]:{
        ...ships[shipId],
        hitCount: count
      }
    }
    setShips(updatedShips);
    setTotalHitCount(totalHitCount + 1);
    if(ships[shipId].size === count){
      setShipSunk(shipId);
    }
  }, [ships, totalHitCount]);

  const resetShipSunk = useCallback(() => {
    setShipSunk(false);
  },[]);

  return {
    ships,
    board,
    isGameOver,
    shipSunk,
    resetShipSunk,
    handleFire,
    loadIntialGame,
  }
}

export default useGame;