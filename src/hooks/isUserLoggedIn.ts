import { useState, useEffect } from 'react'

export const isUserLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null')

    if (currentUser) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return isLoggedIn
}
