import axios from 'axios'
const baseUrl = 'https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo'

let token 
let NotaUp

const setToken = newToken => {
    console.log(newToken);
    token = newToken 
}

const create = async (objNote ) => {
    const request = axios.post(`${baseUrl}/`,objNote)
    return request.then((response) => response.data)
}

const getAll = async () => {
    // const config = {
    //     params: {ID :token._id}
    // }

    const request = axios.get(`${baseUrl}/?userId=${token._id}`)
    return request.then((response) => response.data)
}

const Delete = async (objNote) => {
    console.log(objNote);
    const request = await axios.delete(`${baseUrl}/${objNote}`,)
    return request
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