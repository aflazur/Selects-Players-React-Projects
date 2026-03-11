import React from 'react';
import deleteLogo from "../../assets/Vector (3).png"
const SelectedCard = ({purchasedPlayer, removePlayer}) => {
    const handleRemove = () => {
        removePlayer (purchasedPlayer)
    }
    
    return (
        <div className='border-2 border-gray-300 p-3 flex justify-between items-center rounded-xl mb-4'>
            <div className='flex items-center'>
                <img src= {purchasedPlayer.player_img} alt="" />
                <div className='ml-2'>
                    <h1 className='font-bold text-2xl'>{purchasedPlayer.player_name}</h1>
                    <p className='text-xl text-gray-400'>{purchasedPlayer.batting_style}</p>
                </div>
            </div>
            <div>
                <img onClick={handleRemove} src={deleteLogo} alt="" />
            </div>
        </div>
    );
};

export default SelectedCard;