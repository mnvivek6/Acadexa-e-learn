import React from 'react'
import { userAPI } from '../Constants/API'
import axios from 'axios'


const userAxios = axios.create({
  baseURL:userAPI
})

export default userAxios
