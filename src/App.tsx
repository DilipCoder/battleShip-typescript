import {useEffect } from 'react';
import './App.css';
import Game from './components/Game/Game';
import useGame from './hooks/useGame';
import Modal from './components/Model/Model';

function App() {
  const {board, ships, shipSunk, isGameOver, resetShipSunk, handleFire} = useGame();
  console.log('ships', ships);
  console.log('board', board);
  useEffect(()=> {
    let timeout:any;
    if(shipSunk){
      timeout = setTimeout(()=> {
        resetShipSunk();
      }, 5000)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [shipSunk, resetShipSunk]);

  return (
    <div className="App">
      {shipSunk && <Modal><p>{`Ship ${shipSunk} sunk`}</p></Modal>}
      {isGameOver && <Modal><p>Game Over</p></Modal>}
      <header className="App-header">
        <h1>BattleShip Game</h1>
        <p>Press on any box to attack on ships</p>
      </header>
      <div className='conatiner'>
        <Game 
          ships={ships}
          board={board}
          handleFire={handleFire}
        />
      </div>
    </div>
  );
}

export default App;
