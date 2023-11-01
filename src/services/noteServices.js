import axios from 'axios'
const baseUrl = 'https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo'

let token 

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
const Update = async (objNoteUp) => {
    
    console.log('llega' , objNoteUp);

    const request = axios.put(`${baseUrl}/`,objNoteUp) 
    console.log(request);   
    return request
}

export default {setToken , create , getAll , Delete, Update   }