const API_KEY = 'byA0c6xHILWpQAtFjZnFdPrQwmDnXUfk'
const baseURL = 'http://api.giphy.com/v1/gifs/search?q='

export const fetchGifs = (queryStr, limit) => {
  return fetch(`${baseURL}${queryStr}&api_key=${API_KEY}&limit=${limit}`)
    .then(resp => resp.json())
}
