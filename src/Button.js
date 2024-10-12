import React, { useContext } from "react";
import { ThemContext } from "./ThemContext";

function Button (){
    const {theme, toggleTheme } = useContext(ThemContext)
    return(
        <button className={theme} onClick={toggleTheme}>Click me</button>
    )
}
export default Button