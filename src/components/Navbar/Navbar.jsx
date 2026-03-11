import React from 'react';
import navImg from '../../assets/logo.png'
import dollar from '../../assets/dollar-1.png'
const Navbar = () => {
    return (
        <div className="navbar w-11/12 mx-auto mt-4">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    <img src={navImg} alt="" />
                </a>
            </div>
            <div className="flex items-center">
                <span className='mr-1'>600000000</span>
                <span className='mr-1'>Coin</span>
                <img src={dollar} alt="" />
            </div>
        </div>
    );
};

export default Navbar;