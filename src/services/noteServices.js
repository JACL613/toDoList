import axios from 'axios'
const baseUrl = '/api/notes'

let token 
let NotaUp

const setToken = newToken => {
    token = `Bearer ${newToken}` 
}

const create = async (objNote ) => {
    const config = {
        headers: {
            Authorization: token 
        }
    }
    console.log(token)
    const request = axios.post(`${baseUrl}/createNote`,objNote,config)
    return request.then((response) => response.data)
}

const getAll = async (objNote) => {
    const config = {
        headers: {
            Authorization: token 
        }
    }
    const request = axios.get(`${baseUrl}/`,config)
    return request.then((response) => response.data)
}

const Delete = async (objNote) => {
    const config = {
        headers: {
            Authorization: token 
        }
    }
    const request = axios.delete(`${baseUrl}/${objNote.id}`,config)
    return request.then((response) => response.data)
}
const noteUpdate = async (objNoteUp) => {
    const config = {
        headers: {
            Authorization: token 
        }
    }
    const notaUp =  {title: objNoteUp.title,content: objNoteUp.content} 

    const request = axios.put(`${baseUrl}/${objNoteUp.id}`,notaUp,config) 
    console.log(request);   
    return request.then((response) => response.data)
}
const note = () => {
    console.log(NotaUp)
    return NotaUp
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {setToken , create , getAll , Delete, noteUpdate , note }