import { createContext,useState} from "react";

const ThemeContext=createContext();

export const ThemeProvider =({children}) =>{

    const[theme,setTheme]=useState("dark")

    const value={
        theme,
        setTheme
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
export default ThemeContext;