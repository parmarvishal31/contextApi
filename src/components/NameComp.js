import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';

const NameComp = () => {
    const { name } = useContext(MyContext);
    return (
        <div>
            {name}
        </div>
    )
}

export default NameComp
