import axios from 'axios'

const baseapi = axios.create({
    baseURL: 'https://devlinkbe.onrender.com/api/',
    headers: {'content-type':'application/json'}
})

export default baseapi;