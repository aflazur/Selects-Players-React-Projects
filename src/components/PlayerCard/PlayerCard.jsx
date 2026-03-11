import React, { useState } from 'react';
import userImg from '../../assets/user-1.png'
import flag from '../../assets/report 1.png'

const PlayerCard = ({ player, setAvailableBalance, availableBalance }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelected = (playerData) => {
        const playerPrice = parseInt(playerData.price.split('$').join("").split(",").join(""))

        if (availableBalance < playerPrice) {
            alert("Not Enough Coins!!!")
        }
        else {
            setIsSelected(true);
            setAvailableBalance(availableBalance - playerPrice)
        }



    }

    return (
        <div>
            <div className=" card p-4">
                <figure>
                    <img className='rounded-[16px] bg-amber-500 w-full'
                        src={player.player_img}
                        alt="Shoes" />
                </figure>
                <div className="mt-6">
                    <div className='flex gap-2 items-center'>
                        <img src={userImg} alt="" />
                        <h2 className="card-title font-bold text-2xl">{player.player_name}</h2>
                    </div>
                    <div className='flex justify-between items-center mt-4 border-b-1 pb-2 border-gray-300 '>
                        <div className='flex gap-2'>
                            <img src={flag} alt="" />
                            <span>{player.player_country}</span>
                        </div>
                        <button className='btn'>{player.playing_role}</button>
                    </div>

                    <div className='flex justify-between font-bold text-xl'>
                        <span>Rating </span>
                        <span>{player.rating}</span>
                    </div>

                    <div className='flex justify-between  text-xl mt-4'>
                        <span className='font-bold'>{player.batting_style} </span>
                        <span>{player.bowling_style}</span>
                    </div>


                    <div className="flex items-center justify-between mt-4">
                        <span className='font-bold text-xl'>Price: {player.price}</span>
                        <button disabled={isSelected} onClick={() => handleSelected(player)} className="btn">{isSelected === true ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;