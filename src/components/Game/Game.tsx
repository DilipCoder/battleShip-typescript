import * as React from 'react';
import Board from '../Board/Board';
import styles from './Game.module.css';
import Ships from '../Ships/Ships';
import { IShips } from '../../interfaces';
import Players from '../Players/Players';

interface IGame {
   ships: IShips
   board: number[][] | string[][];
   handleFire:(shipId:string) => void;
}

const Game: React.FC<IGame> = (props) => {
    const {board, handleFire} = props;
    const ships = Object.values(props.ships);
    return (
        <div className={styles.gameContainer}>
            <div className={styles.item1}>
                <Board 
                    board={board}
                    handleFire={handleFire}
                    />
            </div>
            <div className={styles.item2}>
                <div style={{width: '100%'}}>
                    <Players 
                        players={[{score: '00', playerName: 'Player1'}, {score: '00', playerName: 'Player2'}]}
                    />
                </div>
                <div style={{width: '100%'}}>
                <Ships 
                    ships={ships}
                    />
                </div>
            </div>    
        </div>
    )
}

export default React.memo(Game);
