import React, { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"


function useDarkMode(key, initalValue){
    const [someValue, setSomeValue] = useLocalStorage("darkMode")

    useEffect(() => {
        if (someValue === true){
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    }, [someValue])

    return [someValue, setSomeValue]
}

export default useDarkMode