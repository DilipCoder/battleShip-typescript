import React, { useState } from 'react';
import styles from './Tile.module.css';
import hitImg from '../../assets/Hit.png';
import missImg from '../../assets/Miss.png';

export interface ITile {
   shipId: string | number;
   handleFire: (shipId:string) => void;
}

const Tile: React.FC<ITile> = (props) => {
    const {shipId, handleFire} = props;
    const [isFired, setFired] = useState(false);

    const handleClick = () => {
        setFired(true);
        if(shipId && !isFired){
            handleFire(shipId as string);
        }
    }

    return (
        <div className={styles.box} onClick={handleClick}>
            {isFired && <img src={shipId ? hitImg : missImg } className={styles.tileStatusIcon} alt="state" />}
        </div>
    );
};

export default React.memo(Tile);

