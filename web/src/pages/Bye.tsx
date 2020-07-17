import React from 'react'
import { useByeQuery } from '../generated/graphql'

export const Bye = () => {
  const { loading, data, error } = useByeQuery({ fetchPolicy: 'network-only' })

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    console.log(error)
    return <div>Error</div>
  }

  if (!data) {
    return <div>No Data</div>
  }

  return <div>Worked {data.bye}</div>
}
