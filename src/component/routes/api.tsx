import axios from 'axios'

export const api = (token?:any) => {
  return(
    axios.create({
      baseURL: 'http://localhost:3000',
      timeout : 5000,
      headers : {
        "Authorization" : `Bearer ${token}`
      }
    })
  )
}