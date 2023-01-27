import React from 'react'
import { IShip } from '../../interfaces'
import missImg from '../../assets/Miss small.png';
import hitImg from '../../assets/Hit small.png';
import styles from './Ship.module.css'

const Ship = (props:{ship:IShip}) => {
    const { shipType, size, hitCount, shipId } = props.ship;
    console.log("size",shipId, size, hitCount);
    const emptyTile = size - hitCount;
    const renderEmpty = new Array(emptyTile).fill(0).map((_, index)=> <img key={shipId + index + 'miss' } src={missImg} className={styles.shipStatusIcon} alt="miss"/>);
    const renderHit = new Array(hitCount).fill(0).map((_, index)=> <img key={shipId + index + 'hit' } src={hitImg} className={styles.shipStatusIcon} alt="hit"/>);

    return (
        <div className={styles.shipContainer}>
            <div style={{width: '50%', textAlign: 'start'}}>
                <img src={require(`../../assets/${shipType}.png`)} className={styles.shipImage} alt={shipType}/>
            </div>
            <div style={{width: '50%', textAlign: 'start'}}>
                {renderEmpty}
                {renderHit}
            </div>
        </div>
    )
}

export default Ship;
