import axios from 'axios'
const baseUrl = 'https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user'

const create = async (objCredentiales) => {
  const data = await axios.post(`${baseUrl}/`, objCredentiales)
  return data
}
const login = async (objCredentiales) => {
  console.log(objCredentiales)
  const data = await axios.post(`${baseUrl}/auth`, objCredentiales)
  return data
}
export default { create, login }
