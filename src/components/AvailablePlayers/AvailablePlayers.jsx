import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playersPromise, setAvailableBalance,availableBalance }) => {
    const players = use(playersPromise);
    
    // console.log(players);
    return (

        <div className='w-11/12 mx-auto items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                players.map(player => <PlayerCard availableBalance ={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
            }

        </div>
    );
};

export default AvailablePlayers;