import { createContext , useState } from "react";

const MyContext = createContext()

const MyProvider = ({children})=>{
  const [openSlider, setOpenSlider] = useState(false);

    const value={
    openSlider,
    setOpenSlider
  }
    return(
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}
export {MyProvider,MyContext};