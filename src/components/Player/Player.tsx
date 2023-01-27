import React from 'react';
import styles from './Player.module.css';

export interface IPlayer {
   score: string;
   playerName: string;
   color?: string;
}

const Player: React.FC<IPlayer> = (props) => {

    return (
        <div className={styles.box} style={{backgroundColor: props.color}}>
            <h1>{props.score}</h1>
            <hr/>
            <h3>{props.playerName}</h3>
        </div>
    );
};

export default React.memo(Player);
