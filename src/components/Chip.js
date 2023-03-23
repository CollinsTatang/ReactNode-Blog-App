import React from "react";
import '../index.css';

const Chip = ({label}) => {
    return(
        <div>
            <p className='chip'>{label}</p>
        </div>
    )
}
export default Chip