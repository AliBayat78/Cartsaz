import { useState, useEffect } from 'react'

export const isUserLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null')

    if (user && currentUser) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return isLoggedIn
}
