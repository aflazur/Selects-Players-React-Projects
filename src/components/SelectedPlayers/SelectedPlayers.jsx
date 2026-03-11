import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers , removePlayer}) => {
    
    return (
        <div className='max-w-11/12 mx-auto'>
            {
                purchasedPlayers.map(purchasedPlayer => <SelectedCard removePlayer={removePlayer} purchasedPlayer ={purchasedPlayer}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;