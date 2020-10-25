import React from 'react';

import './Coin.css';

const Coin = (props) => {
    return (
        <div>
            <img className={props.flip} src={props.coin} alt="" />
        </div>
    );
};

export default Coin;
