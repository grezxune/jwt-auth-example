import React, { useState, useEffect } from 'react'

import { Routes } from './Routes'
import { setAccessToken } from './accessToken'

export const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO - is this required now that we have the token refresh link?
    fetch('http://localhost:4000/refresh_token', { method: 'POST', credentials: 'include' }).then(async (x) => {
      const { accessToken } = await x.json()
      console.log('data:', accessToken)
      // console.log('Refreshed access token:', accessToken)
      setAccessToken(accessToken)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return <Routes />
}
