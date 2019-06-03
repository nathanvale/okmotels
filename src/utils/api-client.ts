/* eslint-disable @typescript-eslint/no-explicit-any */
function client<T>(
  endpoint: string,
  {
    body,
    ...customConfig
  }: {
    body?: any
    method?: 'DELETE' | 'PUT' | 'READ' | 'GET'
    headers?: any
    [key: string]: any
  } = {},
): Promise<T> {
  const token = window.localStorage.getItem('__bookshelf_token__')
  const headers: any = {'content-type': 'application/json'}
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  const config = {
    body: '',
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }
  if (body) {
    config.body = JSON.stringify(body)
  }

  //@ts-ignore
  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then((r: any) => r.json())
}

export {client}
