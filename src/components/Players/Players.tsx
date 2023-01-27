import React from 'react';
import Player, {IPlayer } from '../Player/Player';
import styles from './Players.module.css';
const colors = ['orange', 'green'];
const Players = (props:{players:IPlayer[]}) => {
    const renderPlayers = props.players.map((player, index) => 
        <Player
            key={player.playerName + index}
            playerName={player.playerName}
            score={player.score}
            color={colors[index]}
        />
    )
    return(
        <div className={styles.playersContainer}>
            {renderPlayers}
        </div>
    )
}

export default Players;
