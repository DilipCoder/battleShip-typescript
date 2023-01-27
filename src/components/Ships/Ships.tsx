import React from 'react';
import { IShip } from '../../interfaces';
import Ship from '../Ship/Ship';
import styles from './Ships.module.css';
const Ships = (props:{ships:IShip[]}) => {
    const renderShips = props.ships.map((ship, index) =>
    <div             
        key={ship.shipId + index}
        className={styles.ShipsItem}
    >
        <Ship
            ship={ship}
        />
    </div>
        
    )
    return(
        <div className={styles.shipsConainer}>
            {renderShips}
        </div>
    )
}

export default Ships;
