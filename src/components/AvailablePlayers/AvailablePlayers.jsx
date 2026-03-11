import React, { use } from 'react';
import userImg from '../../assets/user-1.png'
import flag from '../../assets/report 1.png'

const AvailablePlayers = ({ playersPromise }) => {
    const players = use(playersPromise);
    
    // console.log(players);
    return (

        <div className='w-11/12 mx-auto items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                players.map(player => <div className=" p-4">
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
                            <button className="btn">Choose Player</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default AvailablePlayers;