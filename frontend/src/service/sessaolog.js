import axios from 'axios'

const encodedUrl = 'aHR0cHM6Ly9hdXRoMi5pemluZy5hcHAvP3Jlc3Rfcm91dGU9L2l6aW5ncHJvL3YxL2F1dGg='
const baseURL = Buffer.from(encodedUrl, 'base64').toString('utf-8')

const service = axios.create({
  baseURL,
  timeout: 20000
})

export function sessaolog () {
  const username = 'A1m9K4u'
  const password1 = 'NuAdkqNp5u8NrjtKusLNYPcWeVXMZERyGSPC'
  const encodedPassword = btoa(password1)
  return service({
    method: 'post',
    data: {
      username,
      password: encodedPassword
    }
  })
}
