import React, { useContext, useEffect } from 'react'
import { MyContext } from '../context/MyContext'

const AgeComp = () => {
    const { age, setAge } = useContext(MyContext)
    useEffect(() => {
        setTimeout(() => {
            setAge(27)
        }, 3000)
    }, []);


    return (
        <div>
            <h1>vishal</h1>
            {age}
        </div>
    )
}

export default AgeComp
