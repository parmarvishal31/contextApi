import { createContext, useState } from "react";

export const MyContext = createContext()

export const MyContextProvider = ({ children }) => {
    const [name, setName] = useState('vishal');
    const [age, setAge] = useState(23);
    return <MyContext.Provider value={{ name, age, setAge }}>
        {children}
    </MyContext.Provider>
}