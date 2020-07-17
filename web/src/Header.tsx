import React from 'react'
import { Link } from 'react-router-dom'
import { useMeQuery, useLogoutMutation } from './generated/graphql'
import { setAccessToken } from './accessToken'

export const Header = () => {
  const { loading, data, error } = useMeQuery()
  const [logout, { client }] = useLogoutMutation()

  let body: any = null

  if (loading) {
    body = null
  } else if (data?.me) {
    body = <div>You are logged in as {data.me.email}</div>
  } else {
    body = <div>Not logged in</div>
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/bye">Bye</Link>
      </div>
      {!loading && data?.me ? (
        <div>
          <button
            onClick={async () => {
              await logout()
              setAccessToken('')
              await client?.resetStore()
            }}
          >
            Logout
          </button>
        </div>
      ) : null}
      {body}
    </header>
  )
}
