import * as React from 'react';
import Tile, { ITile } from '../Tile/Tile';
import styles from './Board.module.css';

const DEFAULT_SIZE = 10;

interface IBoardProps {
   board: number[][]| string[][];
   handleFire:(shipId:string) => void;
}

const Board: React.FC<IBoardProps> = (props) => {
    const {board, handleFire} = props;
    const renderTile = board.map((row, rowIndex) => (
        <div key={`row_${rowIndex}`} className={styles.boardRow}>
            {row.map((col, colIndex) => 
                <Tile
                    key={`col_${rowIndex}_${colIndex.toString()}`}
                    shipId={col}
                    handleFire={handleFire}
                />
            )}
        </div>
    ));
    return (
        <div className={styles.container}>
            {renderTile}
        </div>
    )
};

export default React.memo(Board);
