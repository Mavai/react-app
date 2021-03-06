import axios from 'axios'
const baseUrl = '/species'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }