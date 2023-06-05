import { createContext, useState } from "react";

export const DeContext = createContext()

export const DeContextProvider = ({ children }) => {
      const [Deutsch, setDeutsch] = useState('default')
      const toogleDeutsch = () => {
            setDeutsch(prevDeutsch => (prevDeutsch === 'default' ? 'deutsch' : 'default'))
      }
      // 若Deutsch的初始狀態是default的string值，就返回deutsch的string值，若非則反為default，表示若default狀態所代表的語言不是德語，那就返回德語。相反的就轉換為非德語的狀態
      return (
            <DeContext.Provider value={{ Deutsch, toogleDeutsch }}>
                  {children}
            </DeContext.Provider>
      )
}