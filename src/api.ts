import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
  },
})

export interface Employee {
  name: string
  email: string
  phoneNumber: string | null
  office: string
  manager: string | null
  orgUnit: string
  mainText: string | null
  gitHub: string | null
  twitter: string | null
  stackOverflow: string | null
  linkedIn: string | null
  imagePortraitUrl: string | null
  imageWallOfLeetUrl: string | null
  highlighted: boolean
  published: boolean
}

export async function getAllEmployees() {
  const response = await instance.get<Employee[]>('/employees')
  return response.data.filter(
    (employee) => employee.published && employee.imagePortraitUrl
  )
}
