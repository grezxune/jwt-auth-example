export let accessToken = ''

export const setAccessToken = (token: string) => {
  accessToken = token
}

export const getAccessToken = () => accessToken
