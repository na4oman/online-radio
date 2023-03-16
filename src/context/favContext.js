import { createContext, useContext, useEffect, useState } from 'react'

// Create context for fav items
const FavContext = createContext({ items: [] })

// Create a custom hook to access the fav context
export const useFav = () => {
  return useContext(FavContext)
}

const FavProvider = ({ children }) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('fav')) || []
  )

  const addItem = item => {
    setItems(prev => {
      const newArr = [...prev, item]
      const uniqueArr = newArr.reduce((acc, cur) => {
        if (!acc.find(item => item.radio_id === cur.radio_id)) {
          acc.push(cur)
        }
        return acc
      }, [])
      return uniqueArr
    })
  }

  const removeItem = item => {
    setItems(prev => {
      const updatedItems = [...prev].filter(i => i.radio_id !== item.radio_id)
      return updatedItems
    })
  }

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(items))
  }, [items])

  return (
    <FavContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </FavContext.Provider>
  )
}

export default FavProvider
