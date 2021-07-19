import axios from "axios";

const baseUrl = 'http://localhost:3002/notes'

export const  getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data //notes
}

export const createNewNote = async (content) => {
  console.log(content)
  const note = {content, important:false}
  const response = await axios.post(baseUrl,note)
  return response.data
} 