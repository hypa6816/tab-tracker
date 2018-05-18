import axios from 'axios'

/* Returns an axios object that points to a url
*
*/
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
